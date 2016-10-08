var formValidate = function(){
    
  var firstName = document.getElementsByName("firstname")[0].value;
  var lastName = document.getElementsByName("lastname")[0].value;
  var age = document.getElementsByName("age")[0].value;
  var mobile = document.getElementsByName("mobile")[0].value;
 
    var isValid = firstName!=lastName && age>18 && mobile.length == 10 ? true:false;
    if(isValid) {
        window.location("success.html");
    }
    return false;
}