// create a variable for all the stacks
const stack = document.querySelectorAll('.stack')

//* create variables for each disk
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')

// create an array with each one of the disks within it
let disks = [one, two, three]
let activeDisk = null


// create a variable for each stack
const stackA = document.querySelector('#A')
const stackB = document.querySelector('#B')
const stackC = document.querySelector('#C')

// Moving the blocks from one container to the other
// use 'prepend' in order to insert new disk at the top of the parent node as the first child


function move() {
  for (let i = 0; i < disks.length; i++) 
    disks[i].addEventListener('click', function () {
      // activeDisk = evt.target.dataset.value
      // check(evt)

      // give red border on block when selected
      disks[i].style.border = 'Red 2px Solid';
      console.log(disks[i]);

      // after  disk is selected, click on desired stack to move disk to
      stackA.addEventListener('click', function () {
        // check()
        stackA.prepend(disks[i])
        win()
      });

      stackB.addEventListener('click', function () {
        // check()
        stackB.prepend(disks[i])
        win()
      });

      stackC.addEventListener('click', function () {
        // check()
        stackC.prepend(disks[i])
        win()
      })
    })
  }
console.log(move())

function stopMove(){
  for(let i = 0; i < disks.length; i++)
      disks[i].removeEventListener('click', function(){
        disks[i].style.border = 'none'
        console.log(disks[i]);
  
        stackA.removeEventListener('click', function () {
          null
        });
  
        stackB.removeEventListener('click', function () {
          null
        });
  
        stackC.removeListener('click', function () {
          null
        })
        
      })
    }



// check function to make sure that the player doesn't place a larger disk on top of a smaller one.
// currently not working, but targeting is working
function check(evt) {
  for (let i = 0; i < stack.length; i++) {
    if (
      // Targeting the value of the disks correctly
      stack[i].firstElementChild.dataset.value < evt.target.dataset.value
    ) {

      alert("You can't place larger disks on top of smaller ones! Try Again.")
    }
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
  for (let i = 0; i < stack.length; i++)
    stack[i].addEventListener('click', function () {
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