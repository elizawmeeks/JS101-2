console.log("hihi");

var myNum = 2.54678949;
var shortNum = myNum.toFixed(2);

var skyIsBlue = true;

if (skyIsBlue){
	console.log("Yes the sky is blue.");
}else {
	console.log("What color is the sky?");
}

var evenOdds = [];

for (var i = 100; i >= 0; i--) {
	if (i % 2 === 0) {
		evenOdds.unshift(i);
	} else {
		evenOdds.push(i);
	}
}

// console.log(evenOdds);

// if (value < 1) {
// 	console.log("Small number");
// } else if (value < 5) {
// 	console.log("Medium number");
// } else if (value < 15) {
// 	console.log("Large number");
// } else {
// 	console.log("Dunno");
// }

var value = 12;
switch (true) {
	case value < 1:
		console.log("Small Number");
		break;
	case value < 5:
		console.log("Medium Number");
		break;
	case value < 15:
		console.log("Large Number");
		break;
	default:
		console.log("Dunno");
}



function subract (one, two){
	return one - two;
}

function add (one, two){
	return one + two;
}

function performAction (numberOne, numberTwo, action){
	var meDone = action(numberOne, numberTwo);
	return meDone;
}

var addValues = performAction(1, 2, add);
console.log("addValues", addValues);

var subtractValues = performAction(3, 1, subract);
console.log("subractValues", subtractValues);

var jediText = "";
var jedi = ["Anakin Skywalker", "Yoda", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Mace Windu", "Kanan Jarrus", "Kit Fisto", "Deepa Bilaba"];

for (var i = 0; i < jedi.length; i++){
	jediText += `${jedi[i]} is a Jedi <br>`;
}

document.getElementById("demo").innerHTML = jediText + `But Ahsoka Tano is no Jedi`;

var myDog = {Name: "Esme", Breed: "Twist", age: 6};
myDog.gender = "Female";


for (prop in myDog) {
	console.log(prop, myDog[prop]);
}

var ourDogs = [];
ourDogs.push({Owner: "Brenda", name: "Esme", breed: "Twist", age: 6});
ourDogs.push({Owner: "Tamela", name: "Big Papa", breed: "Pit Bull", age:12});

console.log("ourDogs", ourDogs);

ourDogs.forEach(function(dog){
	console.log("Name", dog.name, "age", dog.age);
});