/** Register (Mihoko) **/
/* Register Button alert message*/
function validate() {    
    var fname = document.register.fname;    
    var lname = document.register.lname;
	var checked_gender = document.querySelector('input[name = "gender"]:checked'); 			
    var address = document.register.address;    
    var email = document.register.email;    
    var mobile = document.register.mobile;    						
    
    if (fname.value.length <= 0) {    
        alert("First Name is required.");    
        fname.focus();    
        return false;    
    }    
    else if (lname.value.length <= 0) {    
        alert("Last Name is required.");    
        lname.focus();    
        return false;    
    }
	else if(checked_gender == null){
		alert('Gender needs to be selected ');		
	    return false;
	}
    else if (address.value.length <= 0) {    
        alert("Address is required.");    
        address.focus();    
        return false;    
    }      
    else if (email.value.length <= 0) {    
        alert("Email is required.");    
        email.focus();    
        return false;    
    }    
    else if (mobile.value.length <= 0) {    
        alert("Mobile number is required.");    
        mobile.focus();    
        return false;  
	}
	else{
		alert("Thank you for your register!!!\nDiscount code is JINGLE BELL :)");
	}
}

/** product-detail (Wanpin) **/
/*--product-detail- alrms--*/
function tree3(select){
    alert("Please make sure: This is biggest tree");
   }
