window.onload = function () {
    var drawingSurface = document.getElementById("drawingSurface");
    var ctxt = drawingSurface.getContext("2d");

    //Draw a line to divide the canvas
    //to create more space for 2nd part work.
    ctxt.strokeStyle = '#000';
    ctxt.lineWidth = 1;
    ctxt.moveTo(610, 0);
    ctxt.lineTo(610, 620);
    ctxt.stroke();

    //Draw a square 
    ctxt.strokeStyle = '#0f0';
    ctxt.lineCap = "round";
    ctxt.lineWidth = 5;
    ctxt.beginPath();
    ctxt.moveTo(10, 10);
    ctxt.lineTo(200, 10);
    ctxt.lineTo(200, 200);
    ctxt.lineTo(10, 200);
    ctxt.lineTo(10, 10);
    ctxt.fillStyle = "#efe";
    ctxt.fill();
    ctxt.stroke();

    //Draw a 45 degree line into the square
    ctxt.beginPath();
    ctxt.moveTo(10, 10)
    ctxt.lineTo(200, 200);
    ctxt.strokeStyle = '#f00';
    ctxt.stroke();

    //Draw a circle into the square
    ctxt.beginPath();
    ctxt.strokeStyle = "#00f";
    ctxt.arc(105, 105, 95, 2 * Math.PI, false);
    ctxt.stroke();

    //Draw a 4 color circle inside the square clock-direction (false)
    ctxt.beginPath();
    ctxt.strokeStyle = "#0ff"; //blue
    ctxt.arc(105, 105, 80, .5 * Math.PI, 1 * Math.PI, false);
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.strokeStyle = "#aad"; //grey
    ctxt.arc(105, 105, 80, 1 * Math.PI, 1.5 * Math.PI, false);
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.strokeStyle = "#ff0";
    ctxt.arc(105, 105, 80, 1.5 * Math.PI, 2 * Math.PI, false);
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.strokeStyle = "#f0f"; // purple
    ctxt.arc(105, 105, 80, 2 * Math.PI, .5 * Math.PI, false);
    ctxt.stroke();

    //draw a circle different colors using true
    ctxt.beginPath();
    ctxt.strokeStyle = "#ff0";
    ctxt.arc(105, 105, 65, .5 * Math.PI, 2 * Math.PI, true);
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.strokeStyle = "#aad";
    ctxt.arc(105, 105, 65, 2 * Math.PI, 1.5 * Math.PI, true);
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.strokeStyle = "#0ff";
    ctxt.arc(105, 105, 65, 1.5 * Math.PI, 1 * Math.PI, true);
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.strokeStyle = "#f0f";
    ctxt.arc(105, 105, 65, 1 * Math.PI, .5 * Math.PI, true);
    ctxt.stroke();

    //Draw simetric curve
    ctxt.beginPath();
    ctxt.moveTo(250, 200);
    ctxt.quadraticCurveTo(325, -150, 400, 200); //middle point = 250 + ((400-250)/2)
    ctxt.strokeStyle = '#f00';
    ctxt.stroke();
    ctxt.closePath();
    ctxt.beginPath();
    ctxt.moveTo(450, 200);
    ctxt.quadraticCurveTo(600, 100, 450, 10); // middle point 200/2 = 100
    ctxt.strokeStyle = '#0ff';
    ctxt.stroke();
    ctxt.closePath();

    //Draw skewed curves
    ctxt.beginPath();
    ctxt.moveTo(10, 400);
    ctxt.bezierCurveTo(100, 200, 250, 300, 200, 400);
    ctxt.strokeStyle = '#00f';
    ctxt.stroke();

    //Draw square and fill the square in one function
    //Note, stroke style ignored
    ctxt.beginPath();            //It is important to include to clean the settings.
    //Without cleaning. Takes the active setting when render.
    //TAKE OFF AN RUN!
    ctxt.strokeStyle = '#abc';
    ctxt.fillStyle = '#f0f'
    ctxt.fillRect(250, 250, 150, 150);
    ctxt.strokeStyle = "000";   //ignored
    ctxt.stroke();              //ignored

    //fill with gradient
    ctxt.beginPath();
    var gradient = ctxt.createLinearGradient(450, 250, 600, 450); // Coordenates inside the rectangle
    gradient.addColorStop(0, "#ff0");
    gradient.addColorStop(1, "#0ff");
    ctxt.fillStyle = gradient;
    ctxt.fillRect(450, 250, 150, 150);
    ctxt.strokeStyle = "000";   //ignored
    ctxt.stroke();              //ignored

    //fill with radial gradient
    ctxt.beginPath();
    var rGradient = ctxt.createLinearGradient(85, 525, 5, 85, 525, 55); // Coordenates inside the rectangle
    rGradient.addColorStop(0, "#ffa");
    rGradient.addColorStop(.5, "#f00");
    rGradient.addColorStop(1, "#fff");
    ctxt.fillStyle = rGradient;
    ctxt.fillRect(10, 450, 150, 150);
    ctxt.strokeStyle = "0f0";   //ignored
    ctxt.stroke();              //ignored

    //fill creating a pattern
    //Only function OK in IE, Chrome did not function, 
    //Modzila charge the image after refresh the screen.
    ctxt.beginPath();
    ctxt.lineWidth = 3;
    ctxt.rect(250, 450, 150, 150);
    ctxt.strokeStyle = "#f00";
    ctxt.stroke();
    var img = new Image();
    //Local address format
    img.src = "rose.jpg";
    var pat = ctxt.createPattern(img, "repeat");
    ctxt.fillStyle = pat;
    ctxt.fill();


    //fill with image
    //Only function OK in IE, Chrome ignore de image fuction, 
    //Modzila charge the image after refresh the screen for second time.
    ctxt.beginPath();
    ctxt.lineWidth = 3;
    ctxt.rect(450, 450, 150, 150);
    ctxt.strokeStyle = "#000";
    var img2 = new Image();
    img2.src = "flower.jpg"; //Local address format
    ctxt.drawImage(img2, 450, 450)
    ctxt.stroke();

    //****************************************************
    //  SECOND PART
    //****************************************************

    // Text
    ctxt.strokeText("0. Text with default font", 640, 40); // lineWidth = 3
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    // After fix the line width.
    ctxt.strokeText("1. Text with default font lineWidth = 1", 640, 70);
    ctxt.font = "24px arial";
    ctxt.strokeText("2. Text altered to 24px", 640, 100);
    ctxt.strokeStyle = "Red";
    ctxt.fillText("3. Text output by fillText, altering stroke to red", 640, 130); //In chrome fill con red
    ctxt.strokeText("4. Text output by strokeText altering stroke to red", 640, 160);
    ctxt.fillStyle = "Red";
    ctxt.fillText("5. Text with altered fill color to red without stroke", 640, 190);
    ctxt.strokeStyle = "black";
    ctxt.strokeText("6. Text with altered fill and stroke", 640, 220);
    ctxt.fillText("6. Text with altered fill and stroke", 640, 220);
    ctxt.textAlign = "center";
    ctxt.fillStyle = "#f0f";
    ctxt.fillText("7. Text with altered colored font Centered", (drawingSurface.width / 4) * 3,
    drawingSurface.height / 2);
};