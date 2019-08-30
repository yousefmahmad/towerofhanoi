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

// active 

let activeDisk = null
let activeStack = null
let game = document.querySelector('.game')

// Moving the blocks from one container to the other

function move() {
    game.addEventListener('click', function(evt){
      // activeDisk = evt.target.dataset.value
      // activeStack = evt.target.parentElement.id

      // console.log(activeDisk)
      console.log(move())
    })
      

    // if (activeStack.id === one) {
    //   stackB.addEventListener('click', function(){
    //     stackB.prepend(activeDisk)}
    //     )

    //     &&

    //     stackC.addEventListener('click', function(){
    //       stackC.prepend(activeDisk)}
    //       )
    //   } 
}



