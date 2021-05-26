let friends = [`Darren`, `Rachel`, `Zoe`, `Kenzie`, `Emily Mountain`];

// Function to Sing the "99 lines of Code" song.  Function takes the argument of the name of the person singing.  
// Each line of code will use String interpolation to correctly display how many lines of code there are currently (based off the index) and who is singing the song.
// The last two lines of the song are written out seperately due to "line" being singular.
function song(name) {
    for (let i = 99; i > 2; i--) {
        console.log(`${i} lines of code in the file, ${i} lines of code; ${name} strikes one out, clears it all out, ${i - 1} lines of code in the file.`)
    };
    console.log(`2 lines of code in the file, 2 lines of code; ${name} strikes one out, clears it all out, 1 line of code in the file.`)
    console.log(`1 line of code in the file, 1 line of code; ${name} strikes one out, clears it all out, 0 lines of code in the file.`)
};

let button = document.createElement(`button`)
let buttonText = document.createTextNode(`Sing!`)

button.appendChild(buttonText)
document.body.appendChild(button)

button.addEventListener(`click`, buttonClicked)

function buttonClicked(e) {

    // Calling the function by looping through the friends array
    for (i = 0; i < friends.length; i++) {
        let songContainer = document.createElement(`div`)
        songContainer.classList.add(`friend`)
        let containerTitle = document.createElement(`h3`)
        let containerTitleText = document.createTextNode(`${friends[i]}`)
        let songParagraph = document.createElement(`p`)

        containerTitle.appendChild(containerTitleText)
        songContainer.appendChild(containerTitle)
        songContainer.appendChild(songParagraph)

        document.body.appendChild(songContainer)

        song(friends[i])
    }

}