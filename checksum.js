/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("Generated 5 credit numbers randomly:");
var cards = new Array(5);
    for( i = 0; i < 5; i++) {
        cards[i] = new Array(10);
        for( j =0; j < 10; j++) {
            cards[i][j] = Math.floor(Math.random() * 10);
            
            
        }
        console.log("card number " + i+1 + " :");
        console.log(cards[i]);
    }


for(i = 0; i <5; i++) {
    checkCreditCardNumber(cards[i]);
    
}

function checkCreditCardNumber( ccNumber ) {
    console.log("Checking Card Number ");
    
    var newAry = ccNumber.reverse();
    console.log("Reverse number :" + newAry);
    
  
    var checksum = 0;
    for(j=0; j < 9; j+=2) {
            
            checksum += newAry[j]; 
            
        }
        for(z = 1; z < 10; z+=2) {
            if((newAry[j] * 2) > 9) {
                checksum = checksum + newAry[j] +1;
            } else {
                checksum = checksum + newAry[j];
            }
            
        }
        if(checksum % 10 == 0) {
            
            console.log("It is a valid credit number");
        } else {
            console.log("It is an invalid credit number");
        }
    
    
}
