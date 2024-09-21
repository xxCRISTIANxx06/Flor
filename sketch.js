function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    translate(width / 2, height / 2);  // Centra el dibujo
    noFill();
    stroke('#FFA216');
    strokeWeight(2);

    // Dibujar la flor
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 18; j++) {
            ellipse(0, 0, 300 - j * 12, 300 - j * 12);
            rotate(HALF_PI);
        }
        rotate(TWO_PI / 16);
    }

    // Dibujar la letra "A" en el centro
    fill('#FFA216');
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(100);
    text('A', 0, 0);  // Pone la "A" en el centro
}
