// create a variable for each stack
const stackA = document.querySelector('#A')
const stackB = document.querySelector('#B')
const stackC = document.querySelector('#C')

// create a variable for all the stacks
let stacks = [stackA, stackB, stackC]
//* create variables for each disk
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')

// create an array with each one of the disks within it
let disks = [one, two, three]

// active disks and stacks used for selection

let activeDisk = null
let activeStack = null





// Moving disks to different stacks
for (let i = 0; i < disks.length; i++) {
  disks[i].addEventListener('click', move)
}
function move(evt) {
  evt.target.classList.toggle("active")
  stacks = [stackA, stackB, stackC]
  activeDisk = evt.target.dataset.value
  activeStack = evt.target.parentElement.id

  // Go through all stacks and remove active stack from array
  for (let i = 0; i < stacks.length; i++) {
    if (activeStack === stacks[i].id) {
      stacks.splice(i, 1);
    }
  }

  // Put event listeners on remaining stacks
  for (let j = 0; j < stacks.length; j++) {
    stacks[j].addEventListener('click', check)
  }
  win()
}

// Check that disk going into stack is not larger than disk already present in stack

function check(evt) {

  if (evt.target.firstElementChild > activeDisk) {
    console.log(evt.target.firstElementChild)
    console.log(activeDisk)
    const targetDisk = disks[activeDisk - 1]
    targetDisk.classList.toggle("active")
    evt.target.prepend(targetDisk)
  } else if (evt.target.firstElementChild < activeDisk) {
    evt.stopImmediatePropagation()
    // evt.target.classList.toggle("active")
    alert("You can't place larger disks on top of smaller ones! Try Again.")
    console.log(evt)
  }

}

//create a function so that when all 3 boxes have been set into stack C that the player wins
// is not invoking until i go into console log and do callback
function win() {
  if (stackC.childElementCount === 3) {
    return alert('Congratulations! You Win!')
  }
}
console.log(win())


// for every move made the tracker will go up one
const moves = document.querySelector('.movesCounter')
let moveStart = -1;
function tracker() {
  for (let i = 0; i < stacks.length; i++)
    stacks[i].addEventListener('click', function () {
      moves.innerHTML = `Moves: ${moveStart += 1}`
    })
}
console.log(tracker())


// min amount of moves to win
let n = disks.length
const minMoves = 0
const minCalc = document.querySelector('.minMoves')
function calcMin() {
  minCalc.innerHTML = `Minimum Moves to Win: ${((Math.pow(2, n)) - 1)}`
}
console.log(calcMin())








