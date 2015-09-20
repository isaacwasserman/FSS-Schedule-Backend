var express = require('express');
var router = express.Router();
var request = require('request');

var url = 'https://www.google.com/calendar/feeds/2smi71ngo1stlvs3dskc0q0io7bhpm3m%40import.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&futureevents=true&alt=json';

var getCalendar = function(callback) {
  request(url, function(err, res, body) {
    callback(err, JSON.parse(body));
  });
}

router.get('/', function(req, res){
  getCalendar(function(err, data){
    var result = data;
    var events = [];
  
  for(i=0; i < result.feed.entry.length; i++){
    events.push(result.feed.entry[i]);
  }
  
//  console.log(events);
  
  var eventstoday = [];
  
  var splitdate = Date().split(" ");
  
  var googledate =  [splitdate[0], splitdate[1], parseInt(splitdate[2]) + ","];
  var googledate =  ["Mon", splitdate[1], 21 + ","];
  
  for(i=0; i < events.length; i++){
    var eventdate = events[i].summary.$t.split(" ").slice(1,4);
    
//    console.log(eventdate);
//    console.log(googledate);
    if(eventdate.toString() === googledate.toString()){
      eventstoday.push(events[i]);
    }
  }
  
  var scheduleday = "";
  
  for(i=0; i < eventstoday.length; i++){
    if(eventstoday[i].title.$t.search("Day 1") != -1 || eventstoday[i].title.$t.search("Day 2") != -1 || eventstoday[i].title.$t.search("Day 3") != -1 || eventstoday[i].title.$t.search("Day 4") != -1 || eventstoday[i].title.$t.search("Day 5") != -1 || eventstoday[i].title.$t.search("Day 6") != -1){
      console.log(eventstoday[i].title.$t);
      var thedayevent = eventstoday[i].title.$t;
      var dateofdayevent = eventstoday[i].summary.$t.split(" ").slice(1,4);
      var dateofdayeventstring = dateofdayevent[0] + " " + dateofdayevent[1] + " " + dateofdayevent[2] + " " + Date().split(" ")[3] + " 08:20:00 GMT-0400 (EDT)"
      var dayeventencoded = Date.parse(dateofdayeventstring);
    }
  }
    
    var thedate = Date();
var thedatesplit = thedate.split(" ").splice(0,4);
var datedate = thedatesplit[0] + " " + thedatesplit[1] + " " + thedatesplit[2] + " " + thedatesplit[3];
var timesuffix = " GMT-0400 (EDT)";


var firstperiod = [datedate + " 08:20:00" + timesuffix, datedate + " 09:04:00" + timesuffix];
var secondperiod = [datedate + " 09:05:00" + timesuffix, datedate + " 09:49:00" + timesuffix];
var thirdperiod = [datedate + " 09:50:00" + timesuffix, datedate + " 10:09:00" + timesuffix];
var fourthperiod = [datedate + " 10:10:00" + timesuffix, datedate + " 10:54:00" + timesuffix];
var fifthperiod = [datedate + " 10:55:00" + timesuffix, datedate + " 11:39:00" + timesuffix];
var sixthperiod = [datedate + " 11:40:00" + timesuffix, datedate + " 12:19:00" + timesuffix];
var seventhperiod = [datedate + " 12:20:00" + timesuffix, datedate + " 12:59:00" + timesuffix];
var lunch = [datedate + " 13:00:00" + timesuffix, datedate + " 13:39:00" + timesuffix];
var eighthperiod = [datedate + " 13:40:00" + timesuffix, datedate + " 15:00:00" + timesuffix];

var times = {firstperiod: firstperiod, secondperiod: secondperiod, thirdperiod: thirdperiod, fourthperiod: fourthperiod, fifthperiod: fifthperiod, sixthperiod: sixthperiod, seventhperiod: seventhperiod, lunch: lunch, eighthperiod: eighthperiod};
console.log(times);

var fakedate = "Sun Sep 20 2015 12:00:43 GMT-0400 (EDT)";

var dateencoded = Date.now();

if(dateencoded >= Date.parse(times["firstperiod"][0]) && dateencoded <= Date.parse(times["firstperiod"][1])){
  var period = 1;
}
if(dateencoded >= Date.parse(times["secondperiod"][0]) && dateencoded <= Date.parse(times["secondperiod"][1])){
  var period = 2;
}
if(dateencoded >= Date.parse(times["thirdperiod"][0]) && dateencoded <= Date.parse(times["thirdperiod"][1])){
  var period = 3;
}
if(dateencoded >= Date.parse(times["fourthperiod"][0]) && dateencoded <= Date.parse(times["fourthperiod"][1])){
  var period = 4;
}
if(dateencoded >= Date.parse(times["fifthperiod"][0]) && dateencoded <= Date.parse(times["fifthperiod"][1])){
  var period = 5;
}
if(dateencoded >= Date.parse(times["sixthperiod"][0]) && dateencoded <= Date.parse(times["sixthperiod"][1])){
  var period = 6;
}
if(dateencoded >= Date.parse(times["seventhperiod"][0]) && dateencoded <= Date.parse(times["seventhperiod"][1])){
  var period = 7;
}
if(dateencoded >= Date.parse(times["lunch"][0]) && dateencoded <= Date.parse(times["lunch"][1])){
  var period = 8;
}
if(dateencoded >= Date.parse(times["eighthperiod"][0]) && dateencoded <= Date.parse(times["eighthperiod"][1])){
  var period = 9;
}
var myschedule = [
  [
    "English 9",
    "Study Hall",
    "Break",
    "History 9",
    "Spanish II",
    "Choir",
    "Quakerism",
    "Lunch",
    "Algebra II"
  ],
  [
    "Chemistry",
    "English 9",
    "Break",
    "Spanish II",
    "Study Hall",
    "Choir",
    "Choir",
    "Lunch",
    "History 9"
  ],
  [
    "Algebra II",
    "Chemistry",
    "Break",
    "Study Hall",
    "English 9",
    "Choir",
    "Quakerism",
    "Lunch",
    "Spanish II"
  ],
  [
    "History 9",
    "Algebra II",
    "Break",
    "English 9",
    "Chemistry",
    "Choir",
    "Quakerism",
    "Lunch",
    "Study Hall"
  ],
  [
    "Spanish II",
    "History 9",
    "Break",
    "Chemistry",
    "Algebra II",
    "Quakerism",
    "Quakerism",
    "Lunch",
    "English 9"
  ],
  [
    "Study Hall",
    "Spanish II",
    "Break",
    "Algebra II",
    "History 9",
    "Choir",
    "Quakerism",
    "Lunch",
    "Chemistry"
  ]
];
var classcolors = {
  "English 9":"#1E90FF",
  "Study Hall":"#ADFF2F",
  "Break":"#D3D3D3",
  "History 9":"#FFD700",
  "Spanish II":"#FFA500",
  "Choir":"#C71585",
  "Quakerism":"#FF00FF",
  "Algebra II":"#228B22",
  "Chemistry":"#20B2AA",
  "No Class":"#FFFFFF"
}
    
    
var daynum = parseInt(thedayevent.split(" ")[1]);
var currentclass = myschedule[daynum - 1][period - 1];
var nextclass = myschedule[daynum - 1][period];
console.log(dateofdayeventstring);
    
    if(dateencoded < dayeventencoded){
      console.log("It's a weekend or school has not started.")
      console.log(dateencoded + " is less than " + dayeventencoded);
      var currentclass = "No Class";
      var nextclass = myschedule[daynum - 1][0];
    }

    if(thedayevent == null){
      res.json({day:"Today is not a school day."});
    }
    else {
      res.send(currentclass + "," + classcolors[currentclass].substring(1) + "," + nextclass + "," + classcolors[nextclass].substring(1) + "," + thedayevent.toLowerCase())
      
//      res.json({currentclass: currentclass, currentclasscolor:classcolors[currentclass], nextclasscolor:classcolors[nextclass], nextclass: nextclass, day:thedayevent.toLowerCase()});
    }
  });
});

module.exports = router;
