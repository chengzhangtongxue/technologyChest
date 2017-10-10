var fs = require('fs');

fs.readFile('./1.txt',{
    'charset':'urf-8'
},function(err,data) {
    console.log(data.toString());
});

console.log(fs);

fs.watch('./1.txt',(eventType, filename) => {
    console.log(eventType,filename);
});