var curses = [
    "You become a duck for an hour everytime you sneeze",
    "Blinking has a 1/6th chance of teleporting you to a random location",
    "You become overwhelmed with homicidal tendencies whenever in close proximity with geese",
    "You now have a pair of gills, and can now only breathe in water",
    "You're an arsonist now",
    "Instead of food, you feed off of making people cry",
    "The only manner of fighting you can participate in is a dance battle",
    "You constantly need to pee every 10 minutes",
]

function newCurse() {
    var randNum = Math.floor(Math.random() * (curses.length));
    document.getElementById('curseDisplay').innerHTML = curses[randNum];
}