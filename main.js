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



// Moving the blocks from one container to the other

function move() {
    gmaeElement.addEventListener('click', function (evt) {
      activeDisk = evt.target.dataset.value
      activeStack = evt.target.parentElement.id
      console.log(activeDisk)
      console.log(activeStack)
    })
  }


  const gameElement = document.querySelector(".game")

  // gameElement.addEventListener("click", evt => {
  //   for (let i = 0; i < disks.length; i++)
  //     if (evt.target = disks[0]) {
  //       stackB.prepend(disks[0])
  //     }
  //   console.log(evt.target)
  // })


