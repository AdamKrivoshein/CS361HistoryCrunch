const cheerio = require('cheerio');
const axios = require('axios');

function parsePerson(res, name) {
    console.log('in extract')
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
                dobs.push(name);
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

function parseEvent(res, name) {
    try {
        const $ = cheerio.load(res.data);

        let info = [];

        // Check each 'th' element (sidebar elements with entity details)
        $('th').each(function(i, item) {
            var label = $(this).text();
            if (label == 'Date') {
                let dateRaw = $(this).next().text();
                let date = dateRaw.split('– ');
                console.log(date);
                info.push(name);
                info.push(date[0]);  // Saving start date
                info.push(date[1]);  // End date
            }
        })
        
        console.log(info);
        return info;
    } catch (error) {
        console.error(error);
    }
}

async function getEntity(name, extractFunc) {
    const url = 'https://en.wikipedia.org/wiki/' + name;
    console.log('url', url);
    const res = await axios.get(url);

    return extractFunc(res, name);
}

module.exports = {getEntity: getEntity, 
                parsePerson: parsePerson, 
                parseEvent: parseEvent};