
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
// function createTimeblocks () {
//     for (i=0; i<timeslots.length; i++)
//     {
//         // console.log("This is timeslot: " + timeslots[i]);
//         var timeblockRow = document.createElement("div");
//         timeblockRow.setAttribute("class", "row");
//         document.getElementById("timeblock-container").appendChild(timeblockRow);

//         var timeblockHourElement = document.createElement("div");
//         timeblockHourElement.setAttribute("class", "col-md-2");
//         timeblockHourElement.setAttribute("class","columnHour");  
//         timeblockHourElement.setAttribute("class","time-block");
//         $(".columnHour").addClass("col-2");      
//         timeblockHour = document.createElement("h2");
//         timeblockHour.innerText = timeslots[i];
//         timeblockHourElement.appendChild(timeblockHour);
//         timeblockRow.appendChild(timeblockHourElement);
        

//         var timeblockMainElement = document.createElement("div");
//         timeblockMainElement.setAttribute("class", "col-md-8");
//         timeblockMainElement.setAttribute("class", "columnMain");
//         timeblockMain = document.createElement("p");
//         timeblockMainElement.appendChild(timeblockMain);
//         timeblockRow.appendChild(timeblockMainElement);

//         var timeblockLockElement = document.createElement("div");
//         timeblockLockElement.setAttribute("class", "col-md-2");
//         timeblockLockElement.setAttribute("class","columnLock");
//         timeblockLock = document.createElement("button");
//         timeblockLock.setAttribute("type", "button");
//         timeblockLock.setAttribute("class", "lock-toggle");
//         timeblockLockElement.appendChild(timeblockLock);  
//         timeblockRow.appendChild(timeblockLockElement);
//     }
//     $(".columnHour").css("padding", "20px");
//     $(".columnMain").css("background-color","green");
//     $(".columnLock").css("background-color", "lightblue");
// }
// createTimeblocks();


//TODO: timeblock color-coding based upon time of day
//TODO: add color to the Hour / Lock Slots
//TODO: Add Borders to the timeblocks

//TODO: timeblock event listener (click) ==> enter an event into the timeblock

//TODO: save button ==> save event text info for timeblock in local storage

//TODO: localstorage events should persist through page refresh