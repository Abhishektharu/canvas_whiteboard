const canvas = document.getElementById("whiteboard");
const context = canvas.getContext("2d");
let drawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseout", stopDrawing);

////////////////////////////////////////

const colorPicker = document.getElementById('picker-btn');
colorPicker.addEventListener('change', function(e){
  context.strokeStyle = e.target.value;
  // context.strokeStyle = '#000000';
});


const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearCanvas);

const defalutBtn = document.getElementById("default-btn");
defalutBtn.addEventListener("click", () => {
  context.strokeStyle = "#000";
  colorPicker.value = "#000";
});

const redBtn = document.getElementById("red-btn");
redBtn.addEventListener("click", () => {
  context.strokeStyle = "#FF0000";
  colorPicker.value = "#FF0000";
});

const yellowBtn = document.getElementById('yellow-btn');
yellowBtn.addEventListener('click', ()=>{
  context.strokeStyle = '#FFFF00';
  colorPicker.value = '#FFFF00';
});
const blueBtn = document.getElementById('blue-btn');
blueBtn.addEventListener('click', ()=>{
  context.strokeStyle = '#0000FF';
  colorPicker.value = '#0000FF';
})

const greenBtn = document.getElementById('green-btn');
greenBtn.addEventListener('click', ()=>{
  context.strokeStyle = '#007500';
  colorPicker.value = '#007500';
})




/////////////////////////////////////////
function startDrawing(e) {
  drawing = true;
  draw(e);
}

function draw(e) {
  if (!drawing) return;
  context.lineWidth = 5;
  context.lineCap = "round";

  context.lineTo(e.clientX, e.clientY);
  context.stroke(); //pencil
  context.beginPath();
  context.moveTo(e.clientX, e.clientY);
}

function stopDrawing() {
  drawing = false;
  context.beginPath();
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  clearCanvas();
});

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
