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
colorCode();

function saveTimeblockDesc () {
    var saveButtonArray = document.getElementsByClassName(".saveBtn");
    for (i=0; i<saveButtonArray.length; i++)
    {

    }
}

//TODO: timeblock event listener (click) ==> enter an event into the timeblock

//TODO: save button ==> save event text info for timeblock in local storage

//TODO: localstorage events should persist through page refresh

//TODO: move all function calls into the ready function 


    // $(".saveBtn").on("click", function() {
    //     var text = $(this).siblings(".description").val();
    //     var time = $(this).parent().attr("id");
    //     localStorage.setItem(time, text);
    // })