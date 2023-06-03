function startGame() {
    window.location.assign("index2.html")
}



// ----- TEXT BOXES BELOW -----

var container = document.querySelector(".text")

// The higher the number, the slower the delay.
var speeds = {
    pause: 500,
    slow: 120, 
    normal: 70,
    fast: 40
}

var textLines = [
    { string: "...", speed: speeds.normal},
    { string: "Hello...", speed: speeds.normal},
    { string: "... djmejay-san", speed: speeds.slow},
]

// Creating a <span> for each of the characters in the textLines.string
var characters = []
textLines.forEach((line, index) => {
    // automatically add space to anything that's not the last line
    if (index < textLines.length -1) {
        line.string += " "
    }
    // splitting the lines into their own arrays
    line.string.split("").forEach(character => {
        var span = document.createElement("span")
        span.textContent = character
        container.appendChild(span)
        characters.push({
            span: span, 
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || [] // if they classes don't exist, default to an empty array
        })
    })
})

// ----- TEXT BOXES ABOVE -----