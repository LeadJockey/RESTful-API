const Crawler = require('crawler');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', '..', '..', 'models', 'liveRank.json');
let liveRank = require(filePath);

exports.test = (req, res) => {
    const crawler = new Crawler({
        encoding:'utf-8',
        jQuery: 'cheerio',
        rateLimit: 1000, // `maxConnections` will be forced to 1
        callback: function(err, res, done){
            const $list = res.$('.list_hotissue.issue_row.list_mini li');
            const data =[];
            $list.each((i,e)=>{
                data.push({rank:i+1,el:res.$(e).find('.link_issue').text()});
            })
            liveRank.unshift({date:new Date(),data:data});
            fs.writeFile(filePath, JSON.stringify(liveRank, undefined, 2), 'UTF-8', function (err) {
                if (err) { return console.log(err) }
                console.log('inserted live rank '+ new Date());
            });
            res.options.res.json(liveRank);
            done();
        }
    });
    crawler.queue({
        uri:'http://www.daum.net',
        res:res
    });
};
