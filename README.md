# towerofhanoi.github.io
Tower of Hanoi
A readme.md file, including
The Game

  Tower of Hanoi is a mathematical puzzle game which consists of 3 differnt rods or areas in which to place number of disks of varying sizes. The goal of the game is to move the disks from the rightmost rod or area to the leftmost ro or area. Only one disk may be moved at any point. The disks must be, from top to bottom, in order of size. Furthermore, when moving the disks, no disk may be placed upon a disk that is smaller than itself. 

  You can calculate the minimal number of moves it will take to win the game by using the mathematical expression of 2^n − 1, where n represents the number of disks. For instance, if you were to play with 3 disks, it would take a minimum of 7 moves to win the game. If you were to play with 5 it would take minimum of 31 moves to win the game. By increasing the the number of disks, the minimal number of moves increases exponentially and therefore, the difficulty.

Development

  In order to create this game HTML, CSS and JavaScript were used to create the content, style and set the rules and logic of the game.
  HTML was used for formatting each area of the game webpage, organizing it and sectioning it off for different aspects and features.
  CSS was used to style each feature and game piece to make it more apealing to the player, creating an interactive, yet minimal, user interface, that is appealing to players.
  JavaScript is where most of the heavy lifting takes place. Here the functionality is placed to allow the disks to be moved around at will. Setting the restrictions of the game and also parameters for winning. Using loops, template literals, event literals and more, this virtual version of Tower of Hanoi was created to follow the rules and emualate the ancient game played by monks centuries ago. (Just kidding, it was created by the French mathematician Edourd Lucas in 1883).

Challenges

  I immediatley faced challenges on how to set the parameters, moving the disks around from one rod to the other and preventing a player from being able to stack a larger disk on a smaller one. Doing this involved using many for loops and event listeners.Through many refactoring sessions the game is as lean as possible using the methods that have been implemented.

Improvements

The game code needs to be refactored once more in order to lean it out and get it to DRY and KISS standards. Furthermore, additional functionality, such as a reset button need to be added, and perhaps more interactive user interface in order to perhaps change the background etc.
