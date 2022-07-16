// Diagonal of a Square
function squareDiagonal(num){
    var diagonal = Math.sqrt((num**2)*2);
    
    return diagonal
}
squareDiagonal(9);


// Area of a Triangle with length of its three sides given
function areaTriangle(a, b, c){
    // Define the semi-perimeter (s)
    let s = (a + b + c)/2;
    let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

    return area;
}
areaTriangle(5, 6, 7);


// Circumference of a Circle
const PI = 3.14         // pi a geometrical constant

function circumference(radius){
    var c = 2 * PI * radius;        // formula for circumference of a circle
    return c;
}
circumference(4);

// Surface area of a circle
function surfaceArea(radius){
    var area = PI*(radius**2);      // formula for area of a circle
    return area;
}
surfaceArea(4);