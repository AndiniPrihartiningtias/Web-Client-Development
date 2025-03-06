"use strict";
// Luas persegi panjang
let l = 5;
let w = 3;
function areaOfRectangel(l, w) {
    return l * w;
}
let areaRactagleResult = areaOfRectangel(l, w);
console.log(areaRactagleResult);
//Diameter of circle
let radius = 5;
function diameterOfCircle(radius) {
    return 2 * radius;
}
let diameterResult = diameterOfCircle(radius);
console.log(diameterResult);
//Circumference of circle
function circumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}
let circumferenceResult = circumferenceOfCircle(radius);
console.log(circumferenceResult);
//Area of circle
function areaOfcircle(radius) {
    return Math.PI * radius * radius;
}
let areaCircleResult = areaOfcircle(radius);
console.log(areaCircleResult);
//Angles of triangle
let a = 80;
let b = 65;
function anglesOfTriangle(a, b) {
    return 180 - (a + b);
}
let anglesTriangleResult = anglesOfTriangle(a, b);
console.log(anglesTriangleResult);
//Difference betwen date 
let date1 = "2024-03-19";
let date2 = "2024-03-21";
function calculateDayDifference(date1, date2) {
    let diffMs = (+new Date(date2)) - (+new Date(date1));
    let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays + "days";
}
console.log(calculateDayDifference(date1, date2));
//Name initials in uppaercase
let name1 = "Jhon";
let name2 = "Doe";
function getInitials(name1, name2) {
    return name1[0] + name2[0];
}
console.log(getInitials(name1, name2));
