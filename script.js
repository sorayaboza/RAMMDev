function startGame() {
    window.location.assign("index2.html")
}

function startMenu() {
    window.location.assign("index.html")
}

// ----- TEXT BOXES BELOW ----- credit: https://www.youtube.com/watch?v=8i2K7uwh124

var container = document.querySelector(".text")
var currentLineIndex = 0; // Keep track of the current line index

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
    { string: "... djmejay-san", speed: speeds.slow,classes:["red"]},
]

// Creating a <span> for each of the characters in the textLines.string
var characters = []
textLines.forEach((line, index) => {
    // Automatically add space to anything that's not the last line
    if (index < textLines.length -1) {
        line.string += " "
    }
    // Splitting the lines into their own arrays
    line.string.split("").forEach(character => {
        var span = document.createElement("span")
        span.textContent = character
        container.appendChild(span)

        // Pushing some specifications on how we want the text to behave
        characters.push({
            span: span, // DOM reference for element manipulation
            isSpace: character === " ",
            delayAfter: line.speed, // Including speed in the character itself
            classes: line.classes || [] // Placing classes on each individual span
        })
    })
})

// This function will call itself until the process is done
function revealOneCharacter(list) {
    // Gives us back a list of everything we removed from the array, and we only want the first one.
    var next = list.splice(0, 1)[0];
    next.span.classList.add("revealed")
    next.classes.forEach((c) => {
        next.span.classList.add(c)
    })

    var delay = next.isSpace ? 0: next.delayAfter // No delay on spaces.
    
    // Everytime the function runs, the list gets 1 smaller. Once it reaches 0, we stop calling the function recursively
    if (list.length > 0) {
        setTimeout(function() {
            revealOneCharacter(list)
        }, delay)
    }
}

// Reveals each character in the list
revealOneCharacter(characters)

// ----- TEXT BOXES ABOVE -----