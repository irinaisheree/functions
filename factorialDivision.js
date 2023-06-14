function factorialDivision (firstNum, secNum){
    
    function factorial(num){
        if(num === 0){
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
 
let firstFactorial = factorial(firstNum)
let secondFactorial = factorial(secNum)
let result = firstFactorial / secondFactorial

console.log(result.toFixed(2))

}

factorialDivision( 5,2)