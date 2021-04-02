var curses = [
    "You become a duck",
    "What is this",
    "Woah another curse?",
    "I just need random text for tests",
    "Curses shall come later"
]

function newCurse() {
    var randNum = Math.floor(Math.random() * (curses.length));
    document.getElementById('curseDisplay').innerHTML = curses[randNum];
}