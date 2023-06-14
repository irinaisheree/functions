function passwordValidator(pass){

     let isValidPass = true;
     let isInvalidLength = pass.length < 6 || pass.length > 10

     if(isInvalidLength){
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters")
     }

     let isOnlyLettersAndDigits = true;
     let digits = 0;

     for(let i = 0; i < pass.length; i++){
        
        let currentElement = pass.charCodeAt(i)
        let isNotNum = currentElement < 48 || currentElement > 57
        let isNum = currentElement >= 48 && currentElement <= 57
        let isNotBigLetter = currentElement < 65 || currentElement > 90
        let isNotSmallLetter = currentElement < 97 || currentElement > 122

        if(isNum){
         digits++
        }

        if(isNotNum && isNotBigLetter && isNotSmallLetter){
            isOnlyLettersAndDigits = false
            isValidPass = false
        }

     }

     if(!isOnlyLettersAndDigits){
        console.log("Password must consist only of letters and digits")
     }
     if(!(digits >= 2)){
        isValidPass = false
        console.log("Password must have at least 2 digits")
     }

     if(isValidPass){
        console.log("Password is valid")
     }

}

passwordValidator('logIn')