let stars = [];
let stars2 = [];
let num;

function setup() {
  starsSlider = createButton("Número de estrelas");
  starsNumber = createSlider(50,3000,3000,1);
  starsNumber.input(updateSliderValue); // Chama a função updateSliderValue quando o slider é alterado

  starsTwist = createButton("Deslocamentos circular");
  starsTwist.mousePressed(resetTwist);
  twistNumber = createSlider(0,12,6,1);

  starsScale = createButton("Escala das estrelas");
  starsScale.mousePressed(resetScale);
  scaleNumber = createSlider(0.95,1,1,0.01);


  createCanvas(800, 800);

  num = starsNumber.value();

  for(let i = 0; i < num; i++){
    stars.push(createVector(random(width), random(height), random(5)))
  }
  stroke(255);
  stars2 = stars;
}

function draw() {
  background(0);
  num = starsNumber.value();

  let twist = twistNumber.value()+174;
  //let scale = 1-((1-scaleNumber.value())/2);
  let scale = scaleNumber.value();
  print("scale = " + scale);

  const posX = map(mouseX, 0, width, -5, 5);
  const posY = map(mouseY, 0, width, -5, 5);

  for(let i = 0; i < num; i++){
    let p1 = stars[i];
    // Escala as estrelas e calcula a translação para centralizá-las
    let scaledX = p1.x * scale;
    let scaledY = p1.y * scale;

    // Calcula a translação para centralizar as estrelas no canvas
    let translateX = (width/2)*(1-scale);
    let translateY = (height/2)*(1-scale);

    circle(scaledX + translateX, scaledY + translateY, p1.z * scale);

    let p2 = stars2[i];
    // Calcula o ângulo entre a posição da estrela e o centro do canvas
    let angleToCenter = atan2(mouseY - p2.y, mouseX - p2.x);

    // Adiciona o ângulo de rotação ao ângulo atual
    let newAngle = angleToCenter + radians(twist);

    // Define a distância entre a estrela e o centro do canvas
    let distanceToCenter = dist(mouseX, mouseY, p2.x, p2.y);

    // Calcula a nova posição com base no ângulo e na distância
    let newX = mouseX + cos(newAngle) * distanceToCenter;
    let newY = mouseY + sin(newAngle) * distanceToCenter;

    circle(newX+posX, newY+posY, p2.z);
  }
}

function resetTwist() {
  twistNumber.value(6);
}

function resetScale() {
  scaleNumber.value(1.0);
}

function updateSliderValue() {
  num = starsNumber.value();
  document.getElementById('sliderValue').innerText = `Quantidade de estrelas: ${num}`; // Atualiza o valor do <p> com o valor do slider
}
