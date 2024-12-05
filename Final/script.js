// Eric Rutledge 12/5/2024

function add(num) {
	document.getElementById("add").textContent = "addition";
	for (let i = 1; i <= 10; i++) {
	document.getElementById("add").textContent += "\r\n" + i + " + " + num + " = " + (i+num);
	}
}

function subtract(num) {
	document.getElementById("sub").textContent = "subtraction";
	let i = 1;
	while (i <= 10) {
		document.getElementById("sub").textContent += "\r\n" + i + " - " + num + " = " + (i-num);
		i++;
	}
}

function multiply(num) {
	document.getElementById("mult").textContent = "multiplication";
	let i = 1;
	do {
		document.getElementById("mult").textContent += "\r\n" + i + " * " + num + " = " + (i*num);
		i++;
	} while (i <= 10)
}

function divide(num, i) { // Recursive loop
	if (i == null) {
		document.getElementById("div").textContent = "division";
		i = 1;
	} else if (i > 10) {
		return;
	}
	
	document.getElementById("div").textContent += "\r\n" + i + " / " + num + " = " + (i/num).toFixed(2);
	divide(num, ++i);
}

function calculate() {
	let num = document.getElementById("num").value;
	add(num);
	subtract(num);
	multiply(num);
	divide(num);
}

document.getElementById("calculate").addEventListener("click", calculate);