function exercice1() {
    let canvasDom = document.querySelector("#ex1");
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(100, 100, 200, 200);
}

function exercice2() {
    let canvasDom = document.querySelector("#ex2");
    let ctx = canvasDom.getContext('2d');
    let circle = {
        color: "#0000FF",
        radius: 100,
        x: 300,
        y: 200
    };

    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}


function exercice3() {
    let canvasDom = document.querySelector("#ex3");
    let ctx = canvasDom.getContext('2d');
    ctx.font = 'bold 68px Montserrat';
    ctx.fillStyle = '#000000';
    ctx.fillText('Geometry.io', 15, 150);
}

function exercice4() {
    let canvasDom = document.querySelector("#ex4");
    let ctx = canvasDom.getContext('2d');
    let circle = {
        color: "#0000FF",
        radius: 100,
        x: 100,
        y: 120,
        stop: null
    };

    circle.stop = setInterval(function() {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        if (circle.x < 300) {
            ctx.fillStyle = circle.color;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            circle.x += 10;
        }
        else {
            clearInterval(circle.stop);
        }
    }, 100)

}



function exercice5() {
    let canvasDom = document.querySelector("#ex5");
    let ctx = canvasDom.getContext('2d');
    let circle = {
        color: "#0000FF",
        radius: 10,
        x: canvasDom.width / 2,
        y: canvasDom.height / 2,
        stop: null
    };

    circle.stop = setInterval(function() {
        if (circle.radius < circle.y) {
            ctx.fillStyle = circle.color;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            circle.radius += 10;
        }
        else {
            clearInterval(circle.stop);
        }
    }, 100)


}

function exercice6() {
    let yellow = "#FFD65B";
    let canvasDom = document.querySelector("#ex6");
    let ctx = canvasDom.getContext('2d');
    let circle = {
        color: "#FFD65B",
        radius: 100,
        x: 110,
        y: 110,
        stop: null
    };
    let myImg = new Image();
    myImg.src = 'pacman.png'
    let count = 0;


    circle.stop = setInterval(function() {
        if (count === 0) {
            ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
            ctx.drawImage(myImg, circle.x - 100, 10);
            count = 1;
            circle.x += 10

        }
        else{
            ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
            ctx.fillStyle = circle.color;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            count = 0;
        }

    }, 300);


}

function initCanvasSize() {
    let canvasList = document.querySelectorAll("canvas");

    for (canvas of canvasList) {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function() {
    initCanvasSize();
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});
