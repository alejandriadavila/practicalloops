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

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let row = csv.split("\n")

for(let i = 0; i < row.length; i++){
    row[i] = row[i].split(",")
}

console.log(row)