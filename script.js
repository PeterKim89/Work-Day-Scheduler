// creating the actual timer element at the top of the page
function createTimer() {
    var timer = document.createElement("h2");
    timer.setAttribute("id", "timer");
    document.getElementById("currentDay").appendChild(timer);
    $("#timer").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));   
}

// track current hour:minutes
// call updateTime upon page refresh to update the time.
var updateTime = function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#timer").text(currentTime)
}

var timeblockSlots = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]; // timeblock ids
var timeblockSlot24Hour = [9,10,11,12,13,14,15,16,17]; // timeblock slots converted to their 24 hour values
function colorCode() {
    for (i=0; i<timeblockSlots.length; i++) {
        // if selected timeblock is earlier than current hour, give it the past class and remove present/future classes if they exist
        if (timeblockSlot24Hour[i] < moment().get('hour')) 
        {
            document.getElementById(timeblockSlots[i]).classList.add("past");
            document.getElementById(timeblockSlots[i]).classList.remove("present");
            document.getElementById(timeblockSlots[i]).classList.remove("future");
        }
        // if selected timeblock is equal to the current hour, give it the present class and remove past/future classes if they exist
        else if (timeblockSlot24Hour[i] == moment().get('hour')) 
        {
            document.getElementById(timeblockSlots[i]).classList.remove("past");
            document.getElementById(timeblockSlots[i]).classList.add("present");
            document.getElementById(timeblockSlots[i]).classList.remove("future");
        }
        // if selected timeblock is later than current hour, give it the future class and remove past/present classes if they exist
        else 
        {
            document.getElementById(timeblockSlots[i]).classList.remove("past");
            document.getElementById(timeblockSlots[i]).classList.remove("present");
            document.getElementById(timeblockSlots[i]).classList.add("future");
        }
    }
}


function saveTimeblockDesc () {
    $(".saveBtn").on("click", function () 
    {
        var saveText = $(this).siblings(".description").val();
        var saveTime = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(saveTime, saveText);
    })
}

// allows the various timeblock descriptions to stay on the page even after a page refresh
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

// trigger functions upon page load
$(document).ready(function() {
    createTimer(); // create the initial jumbotron timer
    updateTime(); // initial time update
    setInterval(updateTime, 1000); // keep the timer incrementing and updating itself
    colorCode(); // color codes the time blocks depending on time of day
    saveTimeblockDesc(); // allows the timeblock descriptions to be saved to local storage
}
)