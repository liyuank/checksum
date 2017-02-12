# checksum

I was asked a question about credit card varification. But the implementation is different from the real world credit card varification. So this program should only be seen as a practice.

Write a javaScript that creates 1 credit card  numbers randomly. This number should be an array of 10 integers. Each digit should be from 0 to 9.  In the script, you write a function named checkCreditCardNumber( ccNumber ) that checks whether ccNumber is a valid credit card number or not. Here is how to check:
1. Reverse the number
2. Scan the number digit by digit.
3. Add the digit to the checksum
4. If the digit is at odd position
a.       Double it
b.       Check if the doubled digit is over 9, if yes, add 1 to the checksum too
5. Repeat 2 to 4 until the end of the array
6. If the checksum is divisible by 10, then the number is a valid credit card number. 

(Be aware: above method is different from Luhn algorithm. (https://en.wikipedia.org/wiki/Luhn_algorithm)

Sample Output:

Generated 1 credit numbers randomly:
Card Number 1: 5 7 2 7 8 7 6 0 4 9

Checking Card Number 1
Reverse Number: 9 4 0 6 7 8 7 2 7 5
It is an invalid credit number
