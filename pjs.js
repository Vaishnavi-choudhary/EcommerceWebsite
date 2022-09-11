
  function submitClick( ) //function shows message after submitting information

  {

  alert("Thank you for your time! Your details have been submitted!");

  }
function formValidation ( )

  {

  flag = true;
   // Validate emails
 if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)* (\.\w{2,3})+$/.test(myForm.user_email.value))  //Regular expressions to validate email

 {

 alert("Enter Valid Email Address!");

 flag = false;

 }
return flag;

 }