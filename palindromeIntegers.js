function palindromeIntegers(arr){

    for(let i = 0; i < arr.length; i++){

        let numAsString = arr[i].toString();
        let reversedNum = numAsString.split('').reverse().join('');

        if(numAsString === reversedNum){
            console.log(true);
        } else{
           console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121])