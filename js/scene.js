let scene = document.querySelector(".screen-container");
let leftNav = document.getElementById("left-nav")
let rightNav = document.getElementById("right-nav")

let locations = [
    {"name" : "Blue Beach", "color": "rgb(50, 50, 155)"},
    {"name" : "Red Street", "color": "Red"},
    {"name" : "Green Cave", "color": "Green"}
]

let currentLocation = locations[0]

console.log(currentLocation)

// create an array holding the locations (as colors for now) make a function that checks 
//where you are and which direction you click to dictate where you are going.

function navLeft(){
    if(currentLocation === locations[0]){ // Blue go Green
        currentLocation = locations[2];
        scene.style.background = currentLocation.color;
        console.log(currentLocation);
    } else if(currentLocation === locations[1]){ // Red go Blue
        currentLocation = locations[0];
        scene.style.background = currentLocation.color;
        console.log(currentLocation);
    } else { // Green go Red
        console.log(currentLocation) 
        currentLocation = locations[1]
        scene.style.background = currentLocation.color;
    }
}
function navRight(){
    if(currentLocation === locations[0]){ // Blue go Red
        currentLocation = locations[1];
        scene.style.background = currentLocation.color;
        console.log(currentLocation);
    } else if(currentLocation === locations[1]){ // Red go Green
        currentLocation = locations[2];
        scene.style.background = currentLocation.color;
        console.log(currentLocation);
    } else { // Green go Blue
        console.log(currentLocation) 
        currentLocation = locations[0]
        scene.style.background = currentLocation.color;
    }   
    //scene.style.background = "Red";
}
