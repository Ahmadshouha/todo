var yourName = prompt("Please enter your name:");
// alert ("Hello "+yourName)
var yourGender = prompt("Please enter your Gender(male/female):");

var yourAge = prompt("Please enter your Age:");

if (yourAge <= 0) {
  alert("This is not an age");
}

var welcomeMassege = prompt("would you like to see the welcoming message?");

var mr = "Welcome Mr";
var ms = "Welcome Ms";

if (welcomeMassege.toLowerCase() === "y" || "yes") {
  if (yourGender.toLowerCase() === "male") {
    alert(mr + " " + yourName);
  } else if (yourGender.toLowerCase() === "female") {
    alert(ms + " " + yourName);
  } else {
    alert("Welcome " + " " + yourName);
  }
}



   
  