// create a variable for each stack
const stackA = document.querySelector('#A')
const stackB = document.querySelector('#B')
const stackC = document.querySelector('#C')

// create a variable for all the stacks
const stacks = [stackA, stackB, stackC]
//* create variables for each disk
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
// create an array with each one of the disks within it
let disks = [one, two, three]

// Moving the blocks from one container to the other

// function move() {
// for (let i = 0; i < disks.length; i++) {
//   disks[i].addEventListener('click', function () {
//     disks[i].style.border = 'Red 2px Solid';
//     console.log(disks[i]);
//   })
// } 

// for (let i = 0; i < stacks.length; i++) {
//   stacks[i].addEventListener('click', function (evt) {
//     evt.preventDefault();
//     if (evt.target.id === 'A') {
//       stackA.appendChild(disks[i])
//     } else if (evt.target.id === 'B') {
//       stackB.appendChild(disks[i])
//     } else if (evt.target.id === 'C') {
//       stackC.appendChild(disks[i])
//     }
//   })
// }

const gameElement = document.querySelector(".game")

gameElement.addEventListener("click", evt => {
    for (let i = 0; i < disks.length; i++)
      if( evt.target = disks[0]){
        stackB.prepend(disks[0])} 
  console.log(evt.target)
})

// function chooseStack() {}
console.log(stacks)

// Moves the disks together into the different container
// function selectStack1() {
//   for (let i = 0; i < stack.length; i++)
//     stack[i].addEventListener('click', function () {
//       stack[i].appendChild(disks[0])
//     })
// }
// console.log(selectStack1())


  // *create a solution set to set your winning parameter to in order to compare it to something else. Need to figure out how to get the computer
  // to read that each individual disk is ontop of the other, so that it will read the disks from top to bottom, comparing their widths
  // perhaps putting the solution array to equal a specific sequence which correlates to the disks being on top of one another from smalleset to largest
  // top to bottom?
  // Test this out once you're able to start moving the disks around to see how the computer pushes each move into an array

  // basically the solution is to have the disk divs as they are, except in stack C
  // const solution  