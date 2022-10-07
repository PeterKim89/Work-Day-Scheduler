// trigger function upon page load
// creating the actual timer element at the top of the page
$(document).ready(function () {
    var timer = document.createElement("h2");
    timer.setAttribute("id", "timer");
    document.getElementById("currentDay").appendChild(timer);
    $("#timer").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));   
})

// track current hour:minutes
// call updateTime upon page refresh to update the time.
var updateTime = function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#timer").text(currentTime)
}
// initial call to updateTime along with a setInterval to keep the timer pseudo-self updating
updateTime();
setInterval(updateTime, 1000);

console.log(typeof(moment().get('hour'))); // returns the current hour (24hr format) as a number value

// 12AM - 8AM (All Future)
// 9AM (9-Present, 11-5 Future)
// 10AM (9-Past, 10-Present, 11-17 Future)
// 11AM (9-10 Past, 11-Present, 12-17 Future)
// 12PM (9-11 Past, 12-Present, 13-17 Future)
// 1PM (9-12 Past, 13-Present, 14-17 Future)
// 2PM (9-13 Past, 14-Present, 15-17 Future)
// 3PM (9-14 Past, 15-Present, 16-17 Future)
// 4PM (9-15 Past, 16-Present, 17 Future)
// 5PM (9-16 Past, 17-Present)
// 6PM - 11PM (All Past)
// target .time-Block class with .past / .present / .future

var timeblockSlots = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]; // timeblock ids
var timeblockSlot24Hour = [9,10,11,12,13,14,15,16,17]; // timeblock slots converted to their 24 hour values


function colorCode() {
    for (i=0; i<timeblockSlots.length; i++) {
        // if selected timeblock is earlier than current hour, make it past
        if (timeblockSlot24Hour[i] < moment().get('hour')) {
            document.getElementById(timeblockSlots[i]).classList.add("past");
            document.getElementById(timeblockSlots[i]).classList.remove("present");
            document.getElementById(timeblockSlots[i]).classList.remove("future");
        }
    }
}

colorCode();

//TODO: timeblock color-coding based upon time of day
//TODO: add color to the Hour / Lock Slots
//TODO: Add Borders to the timeblocks

//TODO: timeblock event listener (click) ==> enter an event into the timeblock

//TODO: save button ==> save event text info for timeblock in local storage

//TODO: localstorage events should persist through page refresh