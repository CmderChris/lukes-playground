function getRandoColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //rgb(r, g, b);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// setInterval(function(){
//     document.body.style.backgroundColor = getRandoColor();
// }, 50)
