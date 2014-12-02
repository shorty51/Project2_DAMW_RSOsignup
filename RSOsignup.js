var participants = new Array();
//var index = participants.length;


var item = document.getElementById("listNames").selectedIndex;
//document.getElementById("listNames").innerHTML = code;
//document.getElementById("name").value = "something";
//var name = document.getElementById("name").value;

function checkMajor() {
	//if major=="other" then Inform your Major:
	//update summary?
	
}

function addParticipant() {
	
	var newContact = document.getElementById("inputname").value;
	var newEmail = document.getElementById("email").value;
	var newPhone = document.getElementById("phone").value;
	var newMale = document.getElementById("male").value;
	var newFemale = document.getElementById("female").value;
	var newMajor = document.getElementById("major").value;
	
	participants.push([newContact, newEmail,newPhone,newMale,newFemale,newMajor]);
	document.write(participants);
	
	
	//check fields, if empty, alert()
	// create a column Name to position 0 of the array participants
	//participants[index]["Name"] = document.getElementById("inputName").value;
	// create a column Email to position 0 of the array participants
	//participants[index]["Email"] = document.getElementById("email").value;
	// create a column Phone to position 0 of the array participants
	//participants[index]["Phone"] = document.getElementById("phone").value;
	// create a column Major to position 0 of the array participants
	//participants[index]["Major"] = document.getElementById("major").value;
}

function sortArray() {
	people.sort(function(a, b) {
		var x = a["name"];
		var y = b["name"];
		if ( typeof x == "string") {
			x = x.toLowerCase();
			y = y.toLowerCase();
		}
		if (x < y)
			return -1;
		else if (x == y)
			return 0;
		else if (x > y)
			return 1;
	});
}

function updateList() {
	//document.getElementById("genderMale").checked
	
}

function updateSummary() {
	//after participant added, add to select list
	
}

function getPersonData() {
	//when name in list selected, pull array id num to display info
	
}

function resetForm() {
	//clear all fields
	
}

function updateParticipant() {
	//when name selected and info displayed, if changed then update
	//similar to add participant, update the array, sort, etc
	
}

function removeParticipant(del) {
	//update list, update array, sort list
	
}

function cancelForm() {
	//cancels the update???? calls function reset, hides buttons
	
}
