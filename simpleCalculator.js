function simpleCalculator(firstNum, secNum, operator){

    let multiply = (firstNum, secNum) => firstNum * secNum
    let divide = (firstNum, secNum) => firstNum / secNum
    let add = (firstNum, secNum) => firstNum + secNum
    let subtract = (firstNum, secNum) => firstNum - secNum

    let res = 0

    switch(operator){
        case "multiply": res = multiply(firstNum, secNum); break;
        case "divide": res = divide(firstNum, secNum); break;
        case "add": res = add(firstNum, secNum); break;
        case "subtract": res = subtract(firstNum, secNum); break;
    }
  
    console.log(res)

}

simpleCalculator(40,
8,
'divide')
