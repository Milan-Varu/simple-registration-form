// index.js

function validate() {
	var fname = document.forms["reg_form"]["fname"].value;
	var lname = document.forms["reg_form"]["lname"].value;
	var address = document.forms["reg_form"]["address"].value;
	var gender = document.forms["reg_form"]["gender"].value;
	var email = document.forms["reg_form"]["email"].value;
	var mobile = document.forms["reg_form"]["mobile"].value;
	var course = document.forms["reg_form"]["course"].value;
  
	if (fname == "") {
	  alert("First Name must be filled out");
	  return false;
	}
  
	if (lname == "") {
	  alert("Last Name must be filled out");
	  return false;
	}
  
	if (address == "") {
	  alert("Address must be filled out");
	  return false;
	}
  
	if (!gender) {
	  alert("Gender must be selected");
	  return false;
	}
  
	if (email == "") {
	  alert("Email Id must be filled out");
	  return false;
	}
  
	// Regular expression to validate email format
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
	  alert("Invalid Email Id format");
	  return false;
	}
  
	if (mobile == "") {
	  alert("Mobile must be filled out");
	  return false;
	}
  
	// Regular expression to validate mobile number (allowing 10 digits only)
	var mobileRegex = /^\d{10}$/;
	if (!mobileRegex.test(mobile)) {
	  alert("Invalid Mobile number format");
	  return false;
	}
  
	if (course == "select course") {
	  alert("Please select a course");
	  return false;
	}
  
	alert("Form submitted successfully!");
	return true;
  }
  