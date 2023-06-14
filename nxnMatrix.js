function nxnMatrix(num){

    for(i = 0; i < num; i++){
        let row = "";
        for(let j = 1; j <= num; j++){
            row += `${num} `
        }
        console.log(row)
    }
}
nxnMatrix(3)