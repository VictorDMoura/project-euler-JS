function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++){
        if (n % i === 0) return false
    }
    return true
}

let candidate = 2
let count = 0

while (count < 10001) {
    if(isPrime(candidate)){
        count++
    }

    if (count < 10001){ 
        candidate++      
    }
}

console.log(candidate);
