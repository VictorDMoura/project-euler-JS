function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++){
        if (n % i === 0) return false
    }
    return true
}

let sum = 0
for(let i = 2; i < 2_000_000; i++){
    if(isPrime(i)){
        sum += i
    }
}

console.log(sum);
