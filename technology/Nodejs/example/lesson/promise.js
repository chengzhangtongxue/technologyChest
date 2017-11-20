// var Q = require('q');
// var defer = Q.defer();

// /**
//  * 初始化 promise
//  */
// let getInitialPromise = () => defer.promise;

// getInitialPromise().then(
//     success => console.log('success=' + success),
//     error => console.log('error=' + error),
//     progress => console.log('progress=' + progress))

// defer.notify('in progress');
// defer.resolve('resolve ing');   // promise 的状态只能改变一次
// defer.reject('reject ed');      // so 这个地方没有输出

// let Q = require('q');
// let defer = Q.defer();

// let getInputPromise = () => defer.promise;

// let outputPromise = getInputPromise().then(function(fulfilled) {
//     console.log(fulfilled);
//     return 'fulfilled'
// },function(rejected) {
//     console.log(rejected);
//     return 'rejected'
// });

// outputPromise.then(function(fulfilled) {
//     console.log(`fulfilled=>${fulfilled}`);
// },function(rejected) {
//     console.log(`rejected=>${rejected}`);
// });

// defer.resolve();

var Q = require('q');
/**
 *@private
 */
function getPromise(msg,timeout,opt) {
	var defer = Q.defer();
	setTimeout(function(){
	console.log(msg);
		if(opt)
			defer.reject(msg);
		else
			defer.resolve(msg);
	},timeout);
	return defer.promise;
}
/**
 *没有用done()结束的promise链
 *由于getPromse('2',2000,'opt')返回rejected, getPromise('3',1000)就没有执行
 *然后这个异常并没有任何提醒，是一个潜在的bug
 */
getPromise('1',3000)
	.then(function(){return getPromise('2',2000,'opt')})
	.then(function(){return getPromise('3',1000)});
/**
 *用done()结束的promise链
 *有异常抛出
 */
// getPromise('1',3000)
// 	.then(function(){return getPromise('2',2000,'opt')})
// 	.then(function(){return getPromise('3',1000)})
// 	.done();