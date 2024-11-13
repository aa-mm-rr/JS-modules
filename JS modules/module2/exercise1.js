const numbers = [];
for (let i=0; i<5; i++ ){
    let number = parseInt(prompt(`enter number ${i+1}: `));
    numbers.push(number);
}
let answer = ''
for ( let i = numbers.length - 1; i>=0; i--){
    answer += numbers[i];
}

alert(answer)
