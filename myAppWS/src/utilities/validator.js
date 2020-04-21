let Validator = {};

Validator.validateEmail = function (emailId) {
    
    patternEmail=/^[a-z]*@gmail\.com$/
    if(patternEmail.test(emailId)){
       return true;
    }else{
       error=new Error("Invalid email id...")
       error.status=406
       throw error
    }
}

Validator.validatePassword = function(password){
   patternPassword = /^[A-Za-z0-9\@\#\$\%\^\&\*]{5,10}$/
   if(patternPassword.test(password)){
       return true;
   }
   else{
       error=new Error("Invalid password...")
       error.status=406
       throw error 
   }
}

// module.exports=Validator;
