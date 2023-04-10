/* The bitwise AND operator compares the base-2 of 2 numbers in the form of a 32-bit integer, it evaulates and compares the 2 numbers bit by bit

- 0 & 0 returns false
- 0 & 1 returns false
- 1 & 0 returns false
- 1 & 1 returns true

*/

const x = 5 & 2;

/*
00000000000000000000000000000101 - 5
00000000000000000000000000000010 - 2

Most of these bytes can be ignored up until the occurences of 1's
There are no 1 & 1 matches if you compare them so this will return 0;
*/

Math.parity = number => !(number & 1);

// Checks if a number is even or odd;

/* The bitwise OR operator compares the base-2 of 2 numbers in the form of a 32-bit integer, it evaulates and compares the 2 numbers bit by bit

- 0 | 0 returns false
- 0 | 1 returns true
- 1 | 0 returns true
- 1 | 1 returns true

*/

const y = 7 | 11;

/*
00000000000000000000000000000111 - 7
00000000000000000000000000001011 - 11

Most of these bytes can be ignored up until the occurences of 1's
every number is a match because they all fall true, this should return 1111 which is 15 in denary
*/

/* The bitwise XOR operator compares the base-2 of 2 numbers in the form of a 32-bit integer, it evaulates and compares the 2 numbers bit by bit
This operator works by checking if the bits are different from eachother, if so then it returns true:
This would mean if you tried this operator on the same number then it will always return 0 since the same number is the same and will never return true because it's not different

- 0 ^ 0 returns false
- 0 ^ 1 returns true
- 1 ^ 0 returns true
- 1 ^ 1 returns false
*/

const z = 13 ^ 8;

/*
00000000000000000000000000001101 - 13
00000000000000000000000000001000 - 8

There are 2 true's in here following the logic above, so this will return 101 which is 5 in denary
*/

/* The bitwise NOT operator is slightly more difficult than the rest, you should translate the number you use the operator on into a 32 bit, base-2 number
and then invert every bit, the number on the far left determines if the number is positive or negative, if it's 1 then the number is negative and 0 is positive

you can then ignore most the 0's or 1's on the left hand side since they aren't mostly relevant

now if the number is negative then you -1 from the answer, and if it's positive you +1
*/

const w = ~12;

/* alright so 12 in binary is 

 00000000000000000000000000001100

 which we will then invert to

 11111111111111111111111111110011

 since the number is negative we will subtract 1 from the answer

 to workout the answer we will snip the number at the right when we get to the last 1 before a zero appears next

 that leaves us with 10011 which we should match with 1's since the number is negative

 10011
 11111

 we then workout both numbers and find the difference

 first one is equal to 19
 second one is equal to 31

 31 - 19 - 1 = 11
 */

//  The solution to the bitwise NOT operator seems slightly difficult to understand for some but it works perfectly

const t = 5 << 2;

/* This is the left shift operator, the number on the left of the operator should be converted into base-2 and the number on the right of the operator is how many times shifted
When shifting if there are any blanks to the left then they are filled with zeros

This should always make the number larger unless you try 0 or something

This representation should be as a 32-bit integer but it makes it more difficult to read
101 = 5

shifted 2 times would make it

10100 = 20
*/

const r = 4 >> 2;


/* This operator works the same as the left shift operator but works the other way, making the number smaller 


100 = 4

shifting it 2 times will knock off whatever is on the right hand side, twice

1

leaving us with just 1
*/
