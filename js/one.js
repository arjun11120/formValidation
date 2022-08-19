		function validateForm() {
  			var name = document.myForm.sname.value;
			let email = document.forms["myForm"]["email"].value;
			let password = document.forms["myForm"]["pswd"].value;
			let phonenumber = document.forms["myForm"]["phnum"].value;
  			if (name == "" || email == "" || password == "" || phonenumber == "")  {
    				alert("All feild must be filled out");
    				return false;
  			}
		}
		function vm(x) 
		{
 			if (x.value=='')
  			{
    	
    				alert("You must enter your name!");
    				return false;
			}
		}
		function vm1(x) 
		{
 			if (x.value=='')
  			{
    	
    				alert("Feild is empty!...Enter your address");
    				return false;
			}
		}
		function ValidateEmail(mail) 
		{
 			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  			{
    				return (true);
  			}
    				alert("You have entered an invalid email address!");
    				return false;
		}
		function CheckPassword(x) 
		{ 
		var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
		if(x.value.match(decimal)) 
		{ 
			return true;
		}
		else
		{ 
			alert("Wrong...!..Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
			return false;
		}
		}
		function myFunction() {
  			var x = document.getElementById("myInput");
  			if (x.type === "password") {
    			x.type = "text";
  			} else {
    				x.type = "password";
  				}
		}
		function phonenumber(inputtxt)
		{
 		var phoneno = /^\d{10}$/;
  		if(inputtxt.value.match(phoneno))
  		{
      			return true;
  		}
  			else
  		{
     			alert("Not a valid Phone Number");
     			return false;
  		}
  		}
