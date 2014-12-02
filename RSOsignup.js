var x = "";
var item = document.getElementById("listNames").selectedIndex;
//document.getElementById("listNames").innerHTML = code;
//document.getElementById("name").value = "something";
//var name = document.getElementById("name").value;

function checkMajor() {
	//if major=="other" then Inform your Major:
	
}

function addParticipant() {
	//check fields, if empty, alert()
	
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

