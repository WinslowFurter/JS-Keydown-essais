var monCube = document.getElementById("cube");
var x = parseInt(getComputedStyle(monCube).top)


document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowUp") {
        x -= 10;
        monCube.style.top = x + "px"
        console.log("x=" + monCube.style.top)

    } else if (key === "ArrowDown") {
        x = x + 10;
        monCube.style.top = x + "px";
        console.log("x=" + monCube.style.top)

    }
})

var monCube = document.getElementById("cube");
var y = parseInt(getComputedStyle(monCube).left)


document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowLeft") {
        y -= 10;
        monCube.style.left = y + "px"
        console.log("y=" + monCube.style.left)

    } else if (key === "ArrowRight") {
        y = y + 10;
        monCube.style.left = y + "px";
        console.log("y=" + monCube.style.left)

    }
})

document.addEventListener("keydown", function (event) {
            if (monCube.style.top === "500px" & monCube.style.left === "500px") {
                alert("BRAVO");
            }
        })