
const calculate = {
	//function to display value
	dis: (val) => {
		let x = document.getElementById("result").value+=val;
	},
	//function that evaluates the digit and returns result
	solve: () => {
		let x = document.getElementById("result").value;
		let y = eval(x);
		document.getElementById("result").value = y
	},
	// funtion to clear display
	clr: () => {
		document.getElementById("result").value = "";
	},


};

export default calculate;

