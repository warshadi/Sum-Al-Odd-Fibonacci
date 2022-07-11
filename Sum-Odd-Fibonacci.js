/*
    Fibonacci = 0 1 1 2 3 5 8 13 21 
    Sum All Odd Fibonacci
*/

let n1 = 0;
let n2 = 1;
let next;

function sumFibs(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        if (n1 % 2 !== 0 && n1 < num) {
            console.log("this is odd Fibonacci number: " + n1);
            total = total + n1;
        }
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    console.log("this is the sum of all odd numbers: " + total)
}

sumFibs(10);

/*
n1 = 0 ;  next = 1; n2 = 1  ;
n1 = 1 ;  next = 2; n2 = 1 ; 
n1 = 1 ;  next = 2; n2 = 2 ;

*/