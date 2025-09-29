
let firstInt = parseInt(prompt('Please enter the first integer: '));
let secInt = parseInt(prompt('Please enter the second integer: '));

if (firstInt > secInt) {
    document.write('The first number is larger');
}
else if (firstInt < secInt) {
    document.write('The second number is larger');
}
else if (firstInt === secInt) {
    document.write('The numbers are the same');
}