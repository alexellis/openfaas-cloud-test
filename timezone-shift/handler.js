"use strict"

const moment = require('moment');

// { "meeting": "2019-02-18 17:00:00"
//
//
module.exports = (event, context) => {
    console.log(event.body)
    let meeting = moment.utc(event.body.meeting)
    let adjusted = meeting.clone().utc().add(-8, 'hours');

    context
        .status(200)
        .succeed({ meeting: meeting.format(), adjusted: adjusted.format() });
}
