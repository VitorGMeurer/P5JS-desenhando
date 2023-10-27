function setup() {
  
    createCanvas(600, 600);
   
   background('black');
   
   }
   
   function draw() {
   
    stroke('black');
   
    fill('white');
   
   if (mouseIsPressed){
     
   rect(mouseX, mouseY,50,65);
   }
   }