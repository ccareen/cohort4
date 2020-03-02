const syntax = {
	//define attributes / variables
//number

	checkNum: (num) => {
		num++;
		return num;
	},
//string
	checkString: (input) => {
		var sent = "Welcome to " + input + "!";
		return sent;
	},
//boolean
	checkBoolean: (input) => {
		if(input === true){
			return true;
		};
		return false;
	},

//dictionary / objects

	checkDict: (input) => {
		var dict = {
			Name: "chris",
			Age: input};
			
			return dict["Age"];
		},
			
//undefined

	unDef: (input) => {
		if(input === undefined){
			return true;
		};
		return false;
	},
//sample if / else
	ifElse: (input) => {
		if(input === 4){
			return true;
		}else{
			return false;
		};
	},
//functions
	funcExample: (input) => {
		if(input<=2){
			return true;
		};
		return false;
	},
//parameters
	paramExample: (input1, input2) => {
		var result = input1 + input2;
		return result;
	},
//returns
	returnExample: (input) => {
		if(input){
			return input;
		};
		return false;
	},
//arrays
//add to the front
arrayFront: (input) => {
		let fruit = ['Apricot', 'Bannana'];
		let newLength = fruit.unshift(input);
		return fruit[0];
	},
//add to the end
arrayEnd: (input) => {
		let fruit = ['Apricot', 'Bannana'];
		let newLength = fruit.push(input);
		return fruit[2];
	},
//update values
	arrayUpdate: (input) => {
		let fruit = ['Apricot', 'Bannana'];
		fruit[1] = input;
		return fruit[1];
	},
//loops 
//for
	forLoop: (input) => {
		let fruit = ['Apricot', 'Bannana'];
		var i;
		for(i=0; i< fruit.length; i++){
			return fruit[i];
		};
	},

//for/in
	forInLoop: (input) => {
				let fruit = {fname: "Orange", type:"Citrus"}; 
			var x;
			var text = "";
			for(x in fruit){
				text += fruit[x];
				return text;
			};
		},

//while
	whileLoop: (input) => {
		while(input <= 4){
			input++;
			return input;
		};
	},
//do while
	doWhile: (input) => {
		do{
			++input;
		}
		while(input < 10);
		return input;
	},
//forEach (with array and function)
//Objects / Dictionaries
//declare object
//lookup key to retrieve value

	makeObject: (input) => {
		var car = {type: "Ford",  model:"F150", color:input};
		return car.color;

	},
};

export default syntax;
