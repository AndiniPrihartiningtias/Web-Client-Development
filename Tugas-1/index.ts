// Luas persegi panjang
let l: number = 5;
let w: number = 3;

function areaOfRectangel(l: number, w: number): number {
    return l * w;
}

let areaRactagleResult = areaOfRectangel(l, w);
console.log(areaRactagleResult);

//Diameter of circle
let radius: number = 5;

function diameterOfCircle(radius: number): number {
    return 2 * radius;
}
let diameterResult = diameterOfCircle(radius);
console.log(diameterResult);

//Circumference of circle
function circumferenceOfCircle (radius: number): number {
    return 2 * Math.PI * radius;
}
let circumferenceResult = circumferenceOfCircle(radius);
console.log(circumferenceResult)

//Area of circle
function areaOfcircle(radius: number): number {
    return Math.PI * radius * radius;
}
let areaCircleResult = areaOfcircle(radius);
console.log(areaCircleResult)

//Angles of triangle
let a: number = 80;
let b: number = 65;

function anglesOfTriangle(a: number, b: number): number {
    return 180 - (a + b);
}
let anglesTriangleResult = anglesOfTriangle(a, b);
console.log(anglesTriangleResult);

//Difference betwen date 
let date1: string = "2024-03-19";
let date2: string = "2024-03-21";

function calculateDayDifference(date1: string, date2: string): string {
    let diffMs = (+new Date (date2)) - (+new Date(date1));
    let diffDays = Math.ceil( diffMs/ ( 1000* 60 * 60 * 24));
    return diffDays + "days";
}
console.log(calculateDayDifference(date1, date2));

//Name initials in uppaercase
let name1: string = "Jhon";
let name2: string = "Doe";

function getInitials(name1: string, name2: string): string {
    return name1[0] + name2[0]
}
console.log(getInitials( name1, name2));