// create a variable for all the stacks
const stack = document.querySelectorAll('.stack')
//* create variables for each disk
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
// create an array with each one of the disks within it
let disks = [one, two, three]

// create a variable for each stack
const stackA = document.querySelector('#A')
const stackC = document.querySelector('#C')
const StackB = document.querySelector('#B')

// maybe if i add
// Moving the blocks from one container to the other
// ran into bug that when one block is clicked, they all go to stack that corresponds with their number
function selectDisk() {
  for (let i = 0; i < disks.length; i++)
    disks[i].addEventListener('click', function () {
     disks[i].style.border = 'Red 2px Solid'
    }
    )
}
console.log(selectDisk())

function selectStack() {
  for (let i = 0; i < stack.length; i++)
    stack[i].addEventListener('click', function () {
      stack[i].style.backgroundColor = 'pink'
    })
}
console.log(selectStack())

  // *create a solution set to set your winning parameter to in order to compare it to something else. Need to figure out how to get the computer
  // to read that each individual disk is ontop of the other, so that it will read the disks from top to bottom, comparing their widths
  // perhaps putting the solution array to equal a specific sequence which correlates to the disks being on top of one another from smalleset to largest
  // top to bottom?
  // Test this out once you're able to start moving the disks around to see how the computer pushes each move into an array

  // basically the solution is to have the disk divs as they are, except in stack C
  // const solution 