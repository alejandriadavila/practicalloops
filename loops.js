let x = 1

while (x <= 100){
    if(x % 3 === 0 && x % 5 === 0){
        console.log(`Fizz Buzz`)
    }else if(x % 3 === 0){
        console.log(`Fizz`)
    }else if(x % 5 ===0){
        console.log(`Buzz`)
    }else{
        console.log(x)
    }
    x ++
}

let n = 5

for(let i = 2; i < n; i++){
    if(n % i !== 0){
        console.log(n)
        break;
    }else{
        n++
    }
}

let array = [ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26]