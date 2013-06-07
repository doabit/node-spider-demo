var util = require('../lib/util.js');
var cheerio = require('cheerio');
exports.index = function(req, res) {
    var url = "https://github.com/explore";
    console.log(url);
    util.get(url,
    function(content, status) {
        var $ = cheerio.load(content);
        var start = new Date();
        console.log("status:=" + status);
        $('.main .ranked-repositories').each(function(){
          var name = $(this).children('li').children("h3").text();
          console.log('name: '+ name);
        });
        res.send(content);
        var end = new Date();
        console.log("time is " + (end.getTime() - start.getTime()));
    });
};