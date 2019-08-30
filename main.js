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

// active 

let activeDisk = null
let activeStack = null

// Moving the blocks from one container to the other
for (let i = 0; i < disks.length; i++) {
  // disks[i].addEventListener('click', move.bind(evt))
  disks[i].addEventListener('click', move)
}
function move(evt) {
  console.log(evt)
  stacks = [stackA, stackB, stackC]
  activeDisk = evt.target.dataset.value
  activeStack = evt.target.parentElement.id
  console.log(activeDisk)
  console.log(activeStack)
  // give red border on block when selected

  // Go through all stacks and remove active stack from array
  for (let i = 0; i < stacks.length; i++) {
    if (activeStack === stacks[i].id) {
      stacks.splice(i, 1);
      console.log(stacks)
    }
  }

  // Put event listeners on remaining stacks
  for (let j = 0; j < stacks.length; j++) {
    stacks[j].addEventListener('click', check)
  }
}



function check(evt) {
  if (evt.target.firstElementChild > activeDisk) {
    stacks[j].prepend(activeDisk)
    console.log(evt)
  }

}






