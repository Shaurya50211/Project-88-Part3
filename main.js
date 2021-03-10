var canvas = new fabric.Canvas("myCanvas");

var heightOfBodyPart = 30;
var widthOfBodyPart = 30;

var X = 10;
var Y = 10;

bodyPart = "";
character = "";

function playerUpdate() {
    fabric.Image.fromURL("Player.png", function (Img) {
        character = Img;
        character.scaleToWidth(150);
        character.scaleToHeight(140);
        character.set({
            top: Y,
            left: X
        });
        canvas.add(character);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        bodyPart = Img;
        bodyPart.scaleToWidth(widthOfBodyPart);
        bodyPart.scaleToHeight(heightOfBodyPart);
        bodyPart.set({
            top: Y,
            left: X
        });
        canvas.add(bodyPart);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("P and Shift key are pressed together");
        widthOfBodyPart = widthOfBodyPart + 10;
        heightOfBodyPart = heightOfBodyPart + 10;
        document.getElementById("currentWidth").innerHTML = widthOfBodyPart;
        document.getElementById("currentHeight").innerHTML = heightOfBodyPart;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("M and Shift key are pressed together");
        widthOfBodyPart = widthOfBodyPart - 10;
        heightOfBodyPart = heightOfBodyPart - 10;
        document.getElementById("currentWidth").innerHTML = widthOfBodyPart;
        document.getElementById("currentHeight").innerHTML = heightOfBodyPart;
    }

    if (keyPressed == "70") {
        newImage('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == "66") {
        newImage('ironmanBody.png');
        console.log("b");
    }
    if (keyPressed == "76") {
        newImage('hulkLegs.png');
        console.log("l");
    }

    if (keyPressed == "82") {
        newImage('thorRightHand.png');
        console.log("r");
    }

    if (keyPressed == "72") {
        newImage('spidermanLeftHand.png');
        console.log("h");
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }
}

function up() {
    if (Y >= 0) {
        Y -= heightOfBodyPart;
        console.log("Height of the body part is " + heightOfBodyPart);
        console.log("When up arrow is pressed, the X value is " + X + "and the Y value is " + Y);
        canvas.remove(character);
        playerUpdate();
    }
}

function down() {
    if (Y <= 650) {
        Y += heightOfBodyPart;
        console.log("Height of the body part is " + heightOfBodyPart);
        console.log("When down arrow is pressed, the X value is " + X + "and the Y value is " + Y);
        canvas.remove(character);
        playerUpdate();
    }
}

function right() {
    if (X <= 850) {
        X += widthOfBodyPart;
        console.log("Width of the body part is " + widthOfBodyPart);
        console.log("When right arrow is pressed, the X value is " + X + "and the Y value is " + Y);
        canvas.remove(character);
        playerUpdate();
    }
}


function left() {
    if (X >= 0) {
        X -= widthOfBodyPart;
        console.log("Width of the body part is " + widthOfBodyPart);
        console.log("When left arrow is pressed, the X value is " + X + "and the Y value is " + Y);
        canvas.remove(character);
        playerUpdate();
    }
}