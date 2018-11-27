var log4js = require('log4js');//加载log4js模块
console.log1("11111")
// var express = require('express');
// var path = require("path");

// var app = express();

//通过configure()配置log4js
log4js.configure({
    appenders: [
        {type: 'console'}, //控制台输出
        {
            type: 'file', //文件输出
            filename: 'D:/access.log',//输出日志的文件夹/文件名，不会自动生成文件夹，请先自行创建logs文件夹
            maxLogSize: 1024*12,//一个文件的大小，超出后会自动新生成一个文件
            backups: 3,//备份的文件数量
            category: 'normal'
        }
    ],
    replaceConsole: true
});
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');//设置输出级别，具体输出级别有6个，见下方说明

export default logger
// module.exports = logger
// app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}));

// app.get("/", function(req, res){
//    res.send("88888");
// });
// var server = app.listen(3001, function(){
//    var host = server.address().address;
//    var port = server.address().port;

//    console.log('Example app listening at http://%s:%s', host, port);
// });