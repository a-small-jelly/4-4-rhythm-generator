let beatz = ["1", "1e", "1&", "1a", "2", "2e", "2&", "2a", "3", "3e", "3&", "3a", "4", "4e", "4&", "4a"];
let notez = ["1-note", "1e-note", "1&-note", "1a-note", "2-note", "2e-note", "2&-note", "2a-note", "3-note", "3e-note", "3&-note", "3a-note", "4-note", "4e-note", "4&-note", "4a-note"];
let positions = [1, 2, 3, 4, 5, 6, 7, 8];

function boolean() {
	return Math.random() < 0.5;
};

function randomInteger(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function restOrNote(divID, noteID) {
	if (boolean() === true) {
	document.getElementById(divID).style.background="black";
	document.getElementById(divID).style.color="white";

	let ele = document.getElementById(noteID);
	document.getElementById(noteID).style.background="black";
	document.getElementById(noteID).style.color="white";
	ele.innerHTML += positions[randomInteger(8)];
};
}

for (let i = 0; i < beatz.length; i++) {
	id = beatz[i];
	id2 = notez[i];
	restOrNote(id, id2);
	//noteID = notez[i];
	//displayPosition(noteID);
};

