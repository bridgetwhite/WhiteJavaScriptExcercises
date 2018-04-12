//excerise 1 -------------------------------

var num = prompt('Enter a Number');

var total = 0;
for (var x = 1; x <= num; x++) {
	total += x;
}

console.log(total);

//excerise 2--------------------------

var play = prompt('Do you want to play?');
if (play == 'yes') {
	do {
		var word = prompt('Enter a Word');
		document.write(word);
		var val = prompt('Do you want to play again?');
	} while (val == 'yes');
}
console.log();

//exercise 3---------------------------------

var answer = prompt('Would you like to print your name?');
var name = 'Hello. My name is Adam';
var n = '!';

if (answer == 'yes') {
	do {
		name = name + n;
		console.log(name);
		var val = prompt('Would you like to print this again?');
	} while (val == 'yes');
}

//excerise 4------------------------------------

var input = prompt('What time of day is it? (mornining, noon, or evening).');
if (input == 'morning') {
	console.log(
		'Since it is morning, you should be eating breakfast. We suggest eggs and toast.'
	);
} else if (input == 'evening') {
	console.log(
		'Since it is evening, you should be eating dinner. We suggest chicken and rice.'
	);
} else if (input == 'noon') {
	console.log(
		'Since it is noon, you should be eating lunch. We suggest a salad.'
	);
} else {
	console.log(
		'Not a valid entry, please enter either morning, noon, or evening'
	);
}
