// soal no. 1
 
function urutanLoop (a : number)  {
    let isiUrutan =[]
    for(let i = 1; i <= a ; i++ ){
        isiUrutan.push('9 x ' + i)
    }
    return isiUrutan;
}
console.log(urutanLoop(10));


//soal no. 2 
function checkPalindrome (a : string)  {
    let memisahkanPalindrome  = a.split('').reverse().join('');
    let hasil  = a === memisahkanPalindrome ? `${a} adalah palindrome` : `${a} bukan palindrome`
    return hasil;
}
console.log(checkPalindrome('madam'));

//soal no.3
function cmKekm (a : number){
    let c = a/ 100000;
    return c + ' KM';
}
console.log(cmKekm(200000));

// soal no 4
function convertUang(a: number): string {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(a);
}
console.log(convertUang(1000)); 

//soal no 5 
function hapusHurugYgDcr(a: string, b: string): string {
    
    return a.replace(b, '');
}
console.log(hapusHurugYgDcr("hello world","ell"));

//soal no 6
function kapital(a: string): string {
    return a.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}
console.log(kapital("hello world"));
