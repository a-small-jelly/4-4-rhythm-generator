// array of one measure

let beatz = ["1", "1e", "1&", "1a", "2", "2e", "2&", "2a", "3", "3e", "3&", "3a", "4", "4e", "4&", "4a"];

// array of corresponding notes to one measure

let notez = ["1-note", "1e-note", "1&-note", "1a-note", "2-note", "2e-note", "2&-note", "2a-note", "3-note", "3e-note", "3&-note", "3a-note", "4-note", "4e-note", "4&-note", "4a-note"];


// array of positions lol 

let positions = [1, 2, 3, 4, 5, 6, 7, 8];



// assuming if i want to randomize keys from an array instead of randomizing a piano key and then whether or not it is maj/min/flat/sharp/etc??? what is better?!?!?!

// array of major keys 

let majors = ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"];

// array of minor keys

let minors = ["Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#"];



// return t/f

function boolean() {
	return Math.random() < 0.5;
};

// random integer

function randomInteger(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// random rest or note + which scale position

function restOrNote(divID, noteID) {
	if (boolean() === true) {
	document.getElementById(divID).style.background="black";
	document.getElementById(divID).style.color="white";
	//return positions[randomInteger(8)];
	// ^ is this necessary?? why is it there lol

	let ele = document.getElementById(noteID);
	document.getElementById(noteID).style.background="black";
	document.getElementById(noteID).style.color="white";
	ele.innerHTML += positions[randomInteger(8)];
};
}


// -------------------------------



// iterate thru measure and add rest or note
// 2nd part adds random note position lol, but need 2 make it correspond to beatz

for (let i = 0; i < beatz.length; i++) {
	id = beatz[i];
	id2 = notez[i];
	restOrNote(id, id2);
	//noteID = notez[i];
	//displayPosition(noteID);
};









/*
let x = 0; x < positions.length; i++) {
	if 
}
*/