
let firstSequence=[1,3,5,2,4,1];
let newSequence=[]
let counter=0;
function setup() {
  let canvas = createCanvas(450, 450);
  canvas.position((windowWidth/2) - width/2, (windowHeight/2) - height/2)
  background(255, 198, 0);
  angleMode(DEGREES);
}
function nextSequence(){
  background(255, 198, 0);
  newSequence=[1];
  for (let sequence = 1; sequence <= firstSequence.length; sequence++){
    if(sequence%2!=0)
    newSequence[sequence]= firstSequence[sequence]+1
    else
    newSequence[sequence]= firstSequence[sequence]+2;
  }
  newSequence[newSequence.length-1]=firstSequence[firstSequence.length-4]
  newSequence[newSequence.length]=1; 
  firstSequence=newSequence
}

function starGenerate(){
  counter++;
  if(counter==20)
  alert("Bs kar bhai ab maan bhe jaa ")
  let NthSequence=0;
  NthSequence = document.getElementById('star').value
  for(let i=1;i<=NthSequence;i++){
  nextSequence();
}
}


function draw() {
  translate(width/2, height/2)
  let draw_seq = firstSequence.toString()
  draw_seq = draw_seq.split(',').map((i)=>parseInt(i))
  let ver = drawCircleWithVertices(210, draw_seq.length - 1);
  strokeWeight(5);
  stroke(233, 0, 255)
  point(0,0);
 
  strokeWeight(1);
  for (let point = 0; point < draw_seq.length - 1; point++) {
    line(ver[draw_seq[point] - 1].x, ver[draw_seq[point] - 1].y, ver[draw_seq[point + 1] - 1].x, ver[draw_seq[point + 1] - 1].y)
  }
}


function drawCircleWithVertices(radius, n_vertices){
  let vertices = []
  for (let theta = 0; theta <= 360; theta++) {
    x = radius * cos(theta);
    y = radius * sin(theta);
    
    strokeWeight(2);
    
    if(theta % round(360/n_vertices) == 0){
      vertices.push({x,y});
      stroke(88, 0, 255)
      strokeWeight(10);
    }
    point(x,y);
  }
  return vertices
}
