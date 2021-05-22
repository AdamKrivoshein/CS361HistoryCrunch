# Wikipedia Data Scraper

## Overview
This server takes http requests and returns a json array with the person/event name, start date, and end date.

## Making a Request
The format to search a person is as follows: http://flip3.engr.oregonstate.edu:17832/Person?name=George_Washington

"Person" tells the server you want to search a person, and name=George_Washington tells the server you want to search "George_Washington".
"George Washington" works too, as wikipedia is slightly lenient on formatting, but other than that it is fairly strict for now.

If you want to search an event, you just change "Person" to "Event", and "George_Washington" to "Battle_of_France" or whatever event you're looking for.
For example: http://flip3.engr.oregonstate.edu:17832/Event?name=Battle_of_France

## Receiving Data
The server returns a JSON object with the name of the entity, start date, and end date. For George Washington, "[\"George_Washington\",\"1732-02-22\",\"1799-12-14\"]" would be returned.
