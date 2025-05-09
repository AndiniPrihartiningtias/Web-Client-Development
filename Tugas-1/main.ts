// main.ts
import { areaOfRectangle } from './areaOfRectangle';
import { diameterOfCircle } from './diameterOfCircle';
import { circumferenceOfCircle } from './circumferenceOfCircle';
import { areaOfCircle } from './areaOfCircle';
import { anglesOfTriangle } from './anglesOfTriangle';
import { calculateDayDifference } from './calculateDayDifference';
import { getInitials } from './getInitials';

// Luas persegi panjang
let l: number = 5;
let w: number = 3;
let areaRectangleResult = areaOfRectangle(l, w);
console.log(areaRectangleResult);

// Diameter of circle
let radius: number = 5;
let diameterResult = diameterOfCircle(radius);
console.log(diameterResult);

// Circumference of circle
let circumferenceResult = circumferenceOfCircle(radius);
console.log(circumferenceResult);

// Area of circle
let areaCircleResult = areaOfCircle(radius);
console.log(areaCircleResult);

// Angles of triangle
let a: number = 80;
let b: number = 65;
let anglesTriangleResult = anglesOfTriangle(a, b);
console.log(anglesTriangleResult);

// Difference between dates
let date1: string = "2024-03-19";
let date2: string = "2024-03-21";
console.log(calculateDayDifference(date1, date2));

// Name initials in uppercase
let name1: string = "Jhon";
let name2: string = "Doe";
console.log(getInitials(name1, name2));
