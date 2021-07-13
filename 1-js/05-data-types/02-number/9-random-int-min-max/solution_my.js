function random(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

console.log(random(1,4));