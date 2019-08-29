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
const stackB = document.querySelector('#B')
const stackC = document.querySelector('#C')

// Moving the blocks from one container to the other
// use 'prepend' in order to insert new disk at the top of the parent node as the first child

function move() {
  for (let i = 0; i < disks.length; i++)
    disks[i].addEventListener('click', function () {
      disks[i].style.border = 'Red 2px Solid';
      console.log(disks[i]);
      stackA.addEventListener('click', function () {
        stackA.prepend(disks[i])
      });

      stackB.addEventListener('click', function () {
        stackB.prepend(disks[i])
      });

      stackC.addEventListener('click', function () {
        stackC.prepend(disks[i])
      });
    })
}

function stopMove() {
  for (let i = 0; i < disks.length; i++)
    disks[i].removeEventListener('click', function () {
      disks[i].style.border = 'Red 2px Solid';
      console.log(disks[i]);
      // Remove the event listener after a disk has been moved
      stack[i].forEach(function () {
        stack[i].removeEventListener('click', function () {
          stack[i].prepend(disks[i])
        })
      })
      // A second solution.....

      // stackA.removeEventListener('click', function () {
      //   stackA.prepend(disks[i])
      // });

      // stackB.removeEventListener('click', function () {
      //   stackB.prepend(disks[i])
      // });

      // stackC.removeEventListener('click', function () {
      //   stackC.prepend(disks[i])
      // });
    })
}

console.log(move())

 // check function to make sure that the player doesn't place a larger disk on top of a smaller one.
 function check() {
  for (let i = 0; i < stack.length; i++) {
    if (
      // Targeting the value of the disks correctly
      stack[i].firstElementChild.dataset.value < disks[i].dataset.value) {
      alert("You can't place larger disks on top of smaller ones! Try Again.")
    }
  }
}

//create a solution set to set your winning parameter in order to compare it to something else.
// const Solution = stackC.children([one, two, three])


// for every move mad the tracker will go up one
const moves = document.querySelector('.movesCounter')
let moveStart = -1;
function tracker () {
  for(let i = 0; i < stack.length; i++)
  stack[i].addEventListener('click', function(){
  moves.innerHTML = `Moves: ${moveStart += 1}`
  })
}
console.log(tracker())
// min amount of moves to win
let n = disks.length
const minMoves = 0
const minCalc = document.querySelector('.minMoves')
function calcMin (){
  minCalc.innerHTML = `Minimum Moves to Win: ${((Math.pow(2, n)) - 1)}`
}
console.log(calcMin())
  // basically the solution is to have the disk divs as they are, except in stack C
  // const solution 