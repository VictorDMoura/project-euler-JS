for(let a = 1; a < 1000; a++){
   for(let b = a; b < 1000; b++){
        let c = 1000 - b - a
        if(b < c){
            if (a*a + b*b === c*c){
                console.log(a *b * c)                
                break
            }
        }
   }
}

