
const canvas = document.getElementById("whiteboard");
const context = canvas.getContext("2d");
let drawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

function startDrawing(e) {
  drawing = true;
  draw(e);
}

function draw(e) {
  if (!drawing) return;

  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = "#000";

  context.lineTo(e.clientX, e.clientY);
  context.stroke();
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
