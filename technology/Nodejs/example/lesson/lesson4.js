let express = require('express');
let superagent = require('superagent'); // 发起get，post请求
let cheerio = require('cheerio'); // 类似于jquery
let url = require('url');
let eventproxy = require('eventproxy');   // 控制并发
let _async = require('async');    // 限制并发数

let app = express();
const cnodeUrl = 'https://cnodejs.org/';

app.get('/',(req,response) => {
  superagent.get(cnodeUrl).end((err,res) => {
    if(err) {
      throw Error('错了');
    }
    const $ = cheerio.load(res.text);
    let topicUrls = [];
    $('#topic_list .topic_title').each((idx,element) => {
      topicUrls.push(url.resolve(cnodeUrl,$(element).attr('href')));
    });

    var ep = new eventproxy();
    ep.after('topic_html',topicUrls.length,topics => {
      topics = topics.map(topicPair => {
        let $ = cheerio.load(topicPair[1]);
        return {
          title: $('.topic_full_title').text().trim(),
          href: topicPair[0],
          comment1: $('.reply_content').eq(0).text().trim()
        };
      });

      response.send(topics);
    });

    // 限制了并发数为 5
    _async.mapLimit(topicUrls,5,(url,callback) => {
      console.log(url);
      superagent.get(url).end((err,res) => {
        callback(null, url + ' html content');
        ep.emit('topic_html',[url,res.text]);
      });
    },(err,result) => {
      console.log(result);
    });
    // topicUrls.forEach(topicUrl => {
    //   superagent.get(topicUrl).end((err,res) => {
    //     ep.emit('topic_html',[topicUrl,res.text]);
    //   });
    // });
  });
});

app.listen(3000);