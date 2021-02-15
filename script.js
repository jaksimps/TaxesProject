var test = document.body.querySelector(".taxes");

var firstBill = Number(prompt("What was the bill you recieved?"));

var taxedBill = firstBill*1.07;
var finalBill = taxedBill*1.05;


test.innerHTML="The final bill is $" + finalBill;