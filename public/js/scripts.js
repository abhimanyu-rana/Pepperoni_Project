var jwt = localStorage.getItem("jwt");


let socket = io();
socket.on(() => {
	console.log('Random number: ');
});

function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://localhost:8080/login");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"username": username,
		"password": password
	}));
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4) {
			const objects = JSON.parse(this.responseText);
			console.log(objects);
			if (objects['status'] == 'ok') {
				localStorage.setItem("jwt", objects['accessToken']);
				Swal.fire({
					text: "Logged In",
					icon: 'success',
					confirmButtonText: 'OK'
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = './match.html';
					}
				});
			} else {
				Swal.fire({
					text: objects['message'],
					icon: 'error',
					confirmButtonText: 'OK'
				});
			}
		}
	};
	return false;
}

function logout()
{
	console.log("Logged out");
window.localStorage.removeItem("jwt");
}
let ownertext=`{
	"firstName": "Akshat",
	"local": "Dockdiving, Fetch, Swimming",
	"availability": {
		"Morning": {
			"MonMor": "0",
			"TueMor": "1",
			"WedMor": "0",
			"ThuMor": "0",
			"FriMor": "0",
			"SatMor": "1",
			"SunMor": "0"
		},
		"Noon": {
			"MonDay": "0",
			"TueDay": "1",
			"WedDay": "0",
			"ThuDay": "0",
			"FriDay": "0",
			"SatDay": "1",
			"SunDay": "0"
		},
		"Evening": {
			"MonEve": "0",
			"TueEve": "1",
			"WedEve": "0",
			"ThuEve": "0",
			"FriEve": "0",
			"SatEve": "1",
			"SunEve": "0"
		}
	},
	"suburb": "Box Hill",
	"phone": "0410234195",
	"transport": "1",
	"dogsNames": {
		"Dog1": "Mr.Tutu"
	}
}`

let owner = JSON.parse(ownertext);
console.log(owner);
console.log(owner.firstName);

let dogtext=`{
	"dogname": "Mr. Tutu",
	"age": "0",
	"size": "0",
	"people": "5",
	"dog": "5",
	"prey": "5",
	"training": "1",
	"personality": {
		"trait1": "Energetic",
		"trait2": "Shy",
		"trait3": "Curious"
	},
	"breed": "Chihuahua",
	"other": "Mr.Tutu barks a lot but he 's just a little scared,he means no harm!"
}`
const dog=JSON.parse(dogtext);




function updateOwner(){
	document.getElementById="firstName".innerHTML=owner.firstName.value;
	document.getElementById="local".innerHTML=owner.local;
	document.getElementById="availability".innerHTML=owner.availability;
	document.getElementById="suburb".innerHTML=owner.suburb;
	document.getElementById="phone".innerHTML=owner.phone;
	document.getElementById="transport".innerHTML=owner.transport;
	document.getElementById="dogNames".innerHTML=owner.dognames;
}
function updateDog(dog){
	document.getElementById="dogName".innerHTML=dog.dogName;
	document.getElementById="age".innerHTML=dog.age;
	document.getElementById="size".innerHTML=dog.size;
	document.getElementById="people".innerHTML=dog.people;
	document.getElementById="dog".innerHTML=dog.dog;
	document.getElementById="prey".innerHTML=dog.prey;
	document.getElementById="train".innerHTML=dog.train;
	document.getElementById="personality".innerHTML=dog.personality;
	document.getElementById="breed".innerHTML=dog.breed;
	document.getElementById="other".innerHTML=dog.other;
}



document.addEventListener("DOMContentLoaded", function () {
	var myNav = document.querySelectorAll(".sidenav");
	M.Sidenav.init(myNav, {});
});