function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // Fondo negro
    translate(width / 2, height / 2);  // Centra el dibujo en la pantalla
    noFill();
    stroke('#FFA216');  // Color de los pétalos
    strokeWeight(2);  // Grosor de la línea

    // Dibujar la flor
    let radius = 150;
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 18; j++) {
            ellipse(0, 0, radius - j * 6, radius - j * 6);  // Dibuja círculos más pequeños en cada paso
            rotate(HALF_PI);  // Gira 90 grados en cada iteración
        }
        rotate(TWO_PI / 16);  // Gira la flor en cada iteración completa
    }

    // Dibujar la letra "A" en el centro
    fill('#FFA216');
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(100);
    text('A', 0, 0);  // Coloca la "A" en el centro de la flor
}
