# Wikipedia Data Scraper

## Overview
This server takes http requests and returns a json array with the person/event name, start date, and end date.

## Making a Request
The format to search a person is as follows: http://localhost:3000/Person?name=George_Washington

"Person" tells the server you want to search a person, and name=George_Washington tells the server you want to search "George_Washington".
"George Washington" works too, as wikipedia is slightly lenient on formatting, but other than that it is fairly strict for now.

If you want to search an event, you just change "Person" to "Event", and "George_Washington" to "Battle_of_France" or whatever event you're looking for.
For example: http://localhost:3000/Event?name=Battle_of_France