// Find play this sketch in P5.js' web editor here: https://editor.p5js.org/fletcher/sketches/y3r7yX1p

var checkbx;
var spacing = 25;
var checkbxArray = [];
var gridWidth = 500;
var gridHeight = 500;
var position = 0;
var newline = gridWidth / spacing;

var xSpeed = 1; 
var ySpeed = 1;
var xDirection = 1; 
var yDirection = 1;
var xPos = 6;
var yPos = 6;
var diam = 5;

function setup() {
  
  for(rows = 0; rows < gridHeight; rows += spacing){
    //noprotect
    for(cols = 0; cols < gridWidth; cols += spacing){
      
      // Make a new checkbox in grid of positions
      checkbx = createCheckbox('', false); 
      checkbx.position(cols, rows);
      
      // Add checkboxes to checkbox array
      checkbxArray.push(checkbx);
      
    }
  }
  
  frameRate(10);
}

function draw() {
  
  xPos += (xSpeed * xDirection);
  yPos += (ySpeed * yDirection);
  

 
  if (xPos  >= (gridWidth / spacing) - diam || xPos <= 0) {
    xDirection *= -1;
  }
  if (yPos > (gridHeight / spacing) - diam || yPos < 1) {
    yDirection *= -1;
  }
  
  drawCheckBall(xPos, yPos);
  
}

function drawCheckBall(xOrigin, yOrigin){ 
  
  let y = yOrigin * newline;
  let x = xOrigin;
  
  // Unset all checkboxes
  for(i = 0; i < checkbxArray.length; i++){
    checkbxArray[i].checked(false);
  }
  
  
  // Create ball shape based on variable origin point
  checkbxArray[x + y + 1].checked(true);
  checkbxArray[x + y + 2].checked(true);
  checkbxArray[x + y + 3].checked(true);
  
  checkbxArray[x + y + newline + 0].checked(true);
  checkbxArray[x + y + newline + 1].checked(true);
  checkbxArray[x + y + newline + 2].checked(true);
  checkbxArray[x + y + newline + 3].checked(true);
  checkbxArray[x+ y + newline + 4].checked(true);
  
  checkbxArray[x + y + newline*2 + 0].checked(true);
  checkbxArray[x + y + newline*2 + 1].checked(true);
  checkbxArray[x + y + newline*2 + 2].checked(true);
  checkbxArray[x + y + newline*2 + 3].checked(true);
  checkbxArray[x + y + newline*2 + 4].checked(true);
  
  checkbxArray[x + y + newline*3 + 1].checked(true);
  checkbxArray[x + y + newline*3 + 2].checked(true);
  checkbxArray[x + y + newline*3 + 3].checked(true);
  
}
