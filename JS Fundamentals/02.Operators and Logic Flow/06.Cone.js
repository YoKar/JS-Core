function cone(r, h) {
    let volume = (Math.PI*r*r*h)/3;
    let slanHight = Math.sqrt(r*r+h*h);
    let literalSurface = Math.PI*r*slanHight;
    let baseSurface = Math.PI*r*r;
    let coneArea = literalSurface+baseSurface;
    console.log(volume.toFixed(4));
    console.log(coneArea.toFixed(4));
}
cone(3,5);