// Eric Rutledge 10/21/2024

let myName = "Eric Rutledge";
let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 10;
let n2 = 0;
let numberSum = n1+n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1*n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

let myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

let ageCompare = 19 > numberMult;
document.getElementById("p6").textContent = ageCompare;