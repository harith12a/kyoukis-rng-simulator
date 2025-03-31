// welcome to my world
const min = 1;
const max = 1e6;

function generate() {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let z = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("my1").textContent = `${x} Wealth`
    document.getElementById("my2").textContent = `${y} Accumulation`
    document.getElementById("my3").textContent = `${z} Franchises`
}

// Run once at page load
generate();