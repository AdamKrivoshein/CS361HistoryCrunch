const cheerio = require('cheerio');
const request = require('request');
//Placeholder for user's search. In the final version their search will be spliced by spaces, replacing them with underscores to match wikipedia's url standard.
const name = "George_Washington";

//Building the URL and retrieving the wikipedia page HTML
request('https://en.wikipedia.org/wiki/' + name, function(err, res, html) {
    if (!err && res.statusCode == 200) {
        var $ = cheerio.load(html);
        //Checking each th element, which makeup the personal details sidebar of an individual's wikipedia page
        $('th').each(function(i, item) {
            var label = $(this).text();
            if (label == 'Born') {
                var dob = $(this).next().text();
                console.log('Born: ' + dob);
            }
            if (label == 'Died') {
                var dod = $(this).next().text();
                console.log('Died: ' + dod);
            }
        });
    }
    else {
        console.log("Couldn't find the wikipedia page searched for.");
    }
})