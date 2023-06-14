function charactersinRange(firstChar, secChar){

    let startNum = Math.min(firstChar.charCodeAt(), secChar.charCodeAt())
    let endNum = Math.max(firstChar.charCodeAt(), secChar.charCodeAt())

    let charArray = []
    for(let i = startNum + 1; i< endNum; i++ ){
       charArray.push(String.fromCharCode(i))

    }

    console.log(charArray.join(" "))

}

charactersinRange('a',
'd')
