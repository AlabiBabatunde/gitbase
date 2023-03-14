function validateForm(event) {
	event.preventDefault(); // prevent form from submitting

	// get form inputs
	var name = document.forms["myForm"]["name"].value;
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;
	var gender = document.forms["myForm"]["gender"].value;
	var password = document.forms["myForm"]["password"].value;

	// check if any input is empty
	if (name == "" || email == "" || phone == "" || gender == "" || password == "") {
		// highlight empty fields
		if (name == "") {
			document.getElementById("name").style.border = "2px solid red";
		} else {
			document.getElementById("name").style.border = "2px solid #ccc";
		}
		if (email == "") {
			document.getElementById("email").style.border = "2px solid red";
		} else {
			document.getElementById("email").style.border = "2px solid #ccc";
		}
		if (phone == "") {
			document.getElementById("phone").style.border = "2px solid red";
		} else {
			document.getElementById("phone").style.border = "2px solid #ccc";
		}
		if (gender == "") {
			document.getElementById("gender").style.border = "2px solid red";
		} else {
			document.getElementById("gender").style.border = "2px solid #ccc";
		}
		if (password == "") {
			document.getElementById("password").style.border = "2px solid red";
		} else {
			document.getElementById("password").style.border = "2px solid #ccc";
		}
	} else {
		// submit form if all inputs are filled
		document.forms["myForm"].submit();
	}
}
