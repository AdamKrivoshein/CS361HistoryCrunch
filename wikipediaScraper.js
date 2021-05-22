const cheerio = require('cheerio');
const axios = require('axios');

async function getPerson(name) {
    const url = 'https://en.wikipedia.org/wiki/' + name;
    console.log(url);
    const res = await axios.get(url);
    try {
        const $ = cheerio.load(res.data);

        let dobs = [];

        //Check each 'th' element, which are typically the sidebar elements with details about the entity.
        $('th').each(function(i, item) {
            var label = $(this).text();
            if (label == 'Born') {
                let dobRaw = $(this).next().text();
                let dob = dobRaw.split(/\(|\)/);
                console.log(dob);
                dobs.push(name);  // Temporary saving of name. Should use wikipedia article instead long term.
                dobs.push(dob[1]);  // Saving birthdate
            }
            if (label == 'Died') {
                let dodRaw = $(this).next().text();
                let dod = dodRaw.split(/\(|\)/);
                dobs.push(dod[1]);  // Saving death
            }
        })
        
        console.log(dobs);
        return dobs;
    } catch (error) {
        console.error(error);
    }
}

async function getEvent(name) {
    const url = 'https://en.wikipedia.org/wiki/' + name;
    console.log(url);
    const res = await axios.get(url);
    try {
        const $ = cheerio.load(res.data);

        let info = [];

        //Check each 'th' element, which are typically the sidebar elements with details about the entity.
        $('th').each(function(i, item) {
            var label = $(this).text();
            if (label == 'Date') {
                let dateRaw = $(this).next().text();
                let date = dateRaw.split('– ');
                console.log(date);
                info.push(name);  // Temporary saving of name. Should use wikipedia article instead long term.
                info.push(date[0]);  // Saving start date
                info.push(date[1]);  // Saving start date
            }
        })
        
        console.log(info);
        return info;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {getPerson: getPerson, getEvent: getEvent};

//Building the URL and retrieving the wikipedia page HTML


// module.exports = {request};