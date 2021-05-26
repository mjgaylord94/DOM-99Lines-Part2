let friends = [`Darren`, `Rachel`, `Zoe`, `Kenzie`, `Emily Mountain`];

let button = document.createElement(`button`)
let buttonText = document.createTextNode(`Sing!`)

button.appendChild(buttonText)
document.body.appendChild(button)

button.addEventListener(`click`, buttonClicked)

function buttonClicked(e) {

    // Looping everything through the friends array so they get their own corresponding div
    for (i = 0; i < friends.length; i++) {
        
        // List of Variables each Friend gets
        let songContainer = document.createElement(`div`)
        songContainer.classList.add(`friend`)
        let containerTitle = document.createElement(`h3`)
        let containerTitleText = document.createTextNode(`${friends[i]}`)
        let songParagraph = document.createElement(`div`)
        songParagraph.classList.add(`song`)

        // Function to Sing the "99 lines of Code" song.  Function takes the argument of the name of the person singing.  
        // Lines 99-3 use a loop to create seperate p tags and their text
        // The last two lines of the song are written out seperately due to "line" being singular.
        // Each p tag is then appended to the song class div
        function song(name) {
            for (let i = 99; i > 2; i--) {
                let songLine = document.createElement(`p`)
                let songLineText = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${name} strikes one out, clears it all out, ${i - 1} lines of code in the file.`)
            
                songLine.appendChild(songLineText)
                songParagraph.appendChild(songLine)
            };

            let lineTwo = document.createElement(`p`)
            let lineTwoText = document.createTextNode(
                `2 lines of code in the file, 2 lines of code; ${name} strikes one out, clears it all out, 1 line of code in the file.`)
            lineTwo.appendChild(lineTwoText)
            songParagraph.appendChild(lineTwo)

            let lineOne = document.createElement(`p`)
            let lineOneText = document.createTextNode(
                `1 line of code in the file, 1 line of code; ${name} strikes one out, clears it all out, 0 lines of code in the file.`)
            lineOne.appendChild(lineOneText)
            songParagraph.appendChild(lineOne)
        };

        // Calling the Song Fuction for the Indexed Friend
        song(friends[i])

        // Appending each Element into one another and then to the DOM
        containerTitle.appendChild(containerTitleText)
        songContainer.appendChild(containerTitle)
        songContainer.appendChild(songParagraph)

        document.body.appendChild(songContainer)
    }

}
