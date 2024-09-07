// soal no1
function triangle (high : number ){
    let hasil : number [][] =[];
    let angkaTambah =1;

    for( let i = 1; i <= high; i++){
        let penampung : number [] =[]
        console.log(penampung);
        
        
        for(let j = 1; j <= i; j++){
            penampung.push(angkaTambah)
            angkaTambah++
            
            
        } hasil.push(penampung)
        
    } return hasil
}

console.log(triangle(4));

//soal no.2
function fizzBuzz(x : number) {
    let utamaAngka  = []
    for(let i : number = 1; i <= x; i++ ){

        if(i % 3 === 0 && i % 5 === 0 ){
            utamaAngka.push("fizzBuzz");
            
        }else if( i % 3 === 0){
            utamaAngka.push("fizz")

        }else if(i % 5===0){
            utamaAngka.push('buzz')

        }else {
            utamaAngka.push(i)
        }
        
    }
    return utamaAngka;
}

console.log(fizzBuzz(5));

//soal no 3
function bim (x : number , y : number) {
    let hasilBim : number | string = x /y*100;
    console.log(hasilBim);
    
    let display = '';
    
    if( hasilBim <= 18.5){
        display = "less wight";
    }else if (hasilBim >= 18.5 && hasilBim <= 24.9){
        display = "ideal"
    }else if(hasilBim >= 25.0 && hasilBim <= 29.9){
        display = "overweight";
    } else if (hasilBim >= 30.0 && hasilBim <= 39.9){
        display = "very overweight";
    } else if(hasilBim >= 39.9){
        display = "obesity";
    }
    return display;
}

console.log(bim(80,180));

//soal no 4 
function removeOdd (x : number) {
    let hasil : number[] =[]
    
    
    for(let i : number = 1; i <= x; i++){
        if(i % 2== 0){
            hasil.push(i);
            
            
        }
        
    }
    return hasil;
}


console.log(removeOdd(10));

//soal no 5
function convertArry (a : string): string[]{
    
    return a.split(" ");
    
}

console.log(convertArry("hello world"));
