let scene = document.querySelector(".screen-container");
let leftNav = document.getElementById("left-nav")
let rightNav = document.getElementById("right-nav")
let notify = document.getElementById("area-notif")

let locations = [
    {"name" : "Blue Beach", "color": "rgb(50, 50, 155)"},
    {"name" : "Red Street", "color": "Red"},
    {"name" : "Green Cave", "color": "Green"}
]

let currentLocation = locations[0]

console.log(currentLocation)

// create an array holding the locations (as colors for now) make a function that checks 
//where you are and which direction you click to dictate where you are going.

function resetBlock(){
    // use recursion to run it only when the display isn't none
    if(notify.style.display === "block"){
        console.log("condition met")
        notify.style.display = "none";
    }
}

function notifier(currLocation) {
    scene.style.background = currLocation.color;
    notify.textContent = currLocation.name;
    notify.style.display = "block";
    setTimeout(function() {resetBlock()}, 5000)
}


function navLeft(){
    if(currentLocation === locations[0]){ // Blue to Green
        currentLocation = locations[2];
        notifier(currentLocation)
    } else if(currentLocation === locations[1]){ // Red to Blue
        currentLocation = locations[0];
        notifier(currentLocation)
    } else { // Green to Red
        currentLocation = locations[1]
        notifier(currentLocation)
    }
}
function navRight(){
    if(currentLocation === locations[0]){ // Blue to Red
        currentLocation = locations[1];
        notifier(currentLocation)
    } else if(currentLocation === locations[1]){ // Red to Green
        currentLocation = locations[2];
        notifier(currentLocation)
    } else { // Green to Blue 
        currentLocation = locations[0]
        notifier(currentLocation)
    }   
}
console.log("This is notify style: ", notify.style.display)
// Using setTimeout to check every 5 seconds if the notify box is display = block


