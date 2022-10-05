
var timeslots = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];



console.log(moment());
// trigger function upon page load
$(document).ready(function () {
    var timer = document.createElement("h2");
    timer.setAttribute("id", "timer");
    document.getElementById("currentDay").appendChild(timer);
    $("#timer").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));   
})

// track current hour:minutes
// call updateTime upon page refresh to update the time.
var updateTime = function () {
    var currentTime = moment().format("h:mm")
    $("#time").text(currentTime)
}

// create timeblocks via bootstrap
function createTimeblocks () {
    var timeblockContainer = document.getElementById("#timeblock-container");
    for (i=0; i<timeslots.length; i++)
    {
        console.log("This is timeslot: " + timeslots[i]);
        var timeblockRow = document.createElement("div");
        timeblockRow.setAttribute("class", "row");
        document.getElementById("timeblock-container").appendChild(timeblockRow);


        var timeblockHour = document.createElement("div");
        timeblockHour.setAttribute("class", "col-2");
        timeblockRow.appendChild(timeblockHour);

        var timeblockMain = document.createElement("div");
        timeblockMain.setAttribute("class", "col-8");
        timeblockRow.appendChild(timeblockMain);

        var timeblockLock = document.createElement("div");
        timeblockLock.setAttribute("class", "col-2");  
        timeblockRow.appendChild(timeblockLock);
    }
}
createTimeblocks();
//TODO: timeblocks for 9am-5pm

//TODO: timeblock color-coding based upon time of day

//TODO: timeblock event listener (click) ==> enter an event into the timeblock

//TODO: save button ==> save event text info for timeblock in local storage

//TODO: localstorage events should persist through page refresh