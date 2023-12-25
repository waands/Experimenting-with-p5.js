let particles = [];
let num;
const noiseScale = 0.01;

function setup() {
  particlesSlider = createButton("Particles number");
  particlesNumber = createSlider(50,5000,5000,1);
  particlesNumber.input(updateSliderValue); // Chama a função updateSliderValue quando o slider é alterado

  createCanvas(600,600);

  num = particlesNumber.value();

  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)))
  }
  stroke(255);
}

function draw(){

  background(0, 10);
  num = particlesNumber.value();
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function updateSliderValue() {
  num = particlesNumber.value();
  document.getElementById('sliderValue').innerText = `Quantidade de partículas: ${num}`; // Atualiza o valor do <p> com o valor do slider
}

function mouseReleased(){
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}