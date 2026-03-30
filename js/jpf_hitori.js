"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Michael Santos
   Date:   

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/
var allCells;

window.onload = startUp;

function startUp() {
   document.getElementById("puzzleTitle").innerHTML = "Puzzle 1";
   drawHitori(hitori1Number, hitori1Blocks, hitori1Rating);
   var puzzleButtons = document.getElementsByClassName("puzzles");
   for (var i = 0; i < puzzleButtons.length; i++) {
   puzzleButtons[i].onclick = swapPuzzle;
   }

 setupPuzzle();

   // Add an event handler for the findErrors
   document.addEventListener(findErrors, "click");

   //Add an event listener to the Show solution button
   document.addEventListener(showSolution, "click");  
}

function switchPuzzle(e) {
   if (confirm("You will lose all fo your work on the puzzle! Continue?")) {
   var puzzleID = e.target.id;
   document.getElementById("puzzleTitle").innerHTML = e.target.value;

   switch (puzzleID) {
      case "puzzle1":
         document.getElementById("puzzle").innerHTML =
         drawHitori(hitori1Number, hitori1Blocks, hitori1Rating);
         break;
      case "puzzle2":
         document.getElementById("puzzle").innerHTML =
         drawHitori(hitori2Number, hitori2Blocks, hitori2Rating);
         break;
      case "puzzle3":
         document.getElementById("puzzle").innerHTML =
         drawHitori(hitori3Number, hitori3Blocks, hitori3Rating);
         break;
   }

   setupPuzzle();
}
}

function setupPuzzle() {
   querySelectorAll()
   /* Match all of the data cells in the puzzle */
   puzzleCells = document.querySelectorAll("table#hanjieGrid td");

   /* Set the initial color of each cell to gold */
   for (var i = 0; i < puzzleCells.length; i++) {
      puzzleCells[i].style.backgroundColor = "rgb(233, 207, 29)";
      //set the cell background color in response to the mousedown event
      puzzleCells[i].onmousedown = setBackground;
      // Use a pencil image as the cursor
      puzzleCells[i].style.cursor = "url(../png/jpf_pencil.png), pointer";mousedown() {
      if (e.shiftKey) {
         cellBackground = "rgb(0, 0, 0), border-radius: 0";
      } else if (e.altKey) {
         cellBackground = "rgb(255, 255, 255), border-radius: 50%";
      } else {
         cellBackground = "rgb(101, 101, 101), border-radius: 50%";  
      }
      document.getElementById("hitoriGrid").addEventListener("mouseup", 
      function() {
   var cursorType;
   // Set the background based on the keyboard key
   if (e.shiftKey) {
      cursorType = "url(../png/jpf_eraser.png), alias";
   } else if (e.altKey) {
      cursorType = "url(../png/jpf_block.png), cell";
   } else {
      cursorType = "url(../png/jpf_circle.png), pointer";      
   }
checkSolution();
});
   }
   }

   findErrors() {
      for (var i = 0; i < puzzleCells.length; i++) {
         aalCells
      }
   }
   //Check the puzzle solution
   document.getElementById("hitoriGrid").addEventListener("mouseup", 
      function() {
         var solved = true;
         for(var i =0; i< puzzleCells.length; i++) {
            if ((puzzleCells[i].className === "filled" &&
               puzzleCells[i].style.backgroundColor !== "rgb(101, 101, 101)")
               ||
            (puzzleCells[i].className === "empty" &&
               puzzleCells[i].style.backgroundColor === "rgb(101, 101, 101)")) {

                  solved = false;
                  break;
               }
         }
         if (solved) alert("You Solved the Puzzle");
   }
)

}










   //Create an event listener to highlight incorrect cells
   document.getElementById("peek").addEventListener("click",
      findErrors(
         //Display incorrect white cells in pink
         for (var i = 0; i < filled.length; i++) {
            if (filled[i].style.backgroundColor === "rgb(255, 255, 255)"){
               filled[i].style.backgroundColor = "rgb(255, 211, 211)";
            }
         }
         //Display incorrect white cells in red
         for (var i = 0; i < filled.length; i++) {
            if (filled[i].style.backgroundColor === "rgb(101, 101, 101)"){
               filled[i].style.backgroundColor = "rgb(255, 101, 101)";
            }
         }
         //Remove the hints after 0.5 seconds
         setTimeout(
            function() {
               // change pink cells to white and red cells to gray
               for (var i = 0; i < puzzleCells.length; i++) {
                  if (puzzleCells[i].style.backgroundColor === "rgb(255, 211, 211)") {
                     puzzleCells[i].style.backgroundColor = "rgb(255, 255, 255)";
                  }
                  if (puzzleCells[i].style.backgroundColor === "rgb(255, 101, 101)") {
                     puzzleCells[i].style.backgroundColor = "rgb(101, 101, 101)";
                  }
               }
            }, 500);
    )
   );





         
/* ================================================================= */

function checkSolution() {
   /* Set the initial solved state of the puzzle to true */
   var solved = true;

   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ( (cellClass == "blocks" && cellColor !== "black") || 
           (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         solved = false;
         break;
      }
   }

   /* If solved is still true after the loop, display an alert box */
   if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution () {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   };   
}

function drawHitori(numbers, blocks, rating) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";
   

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString +="</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}