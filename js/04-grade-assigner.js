let score = parseInt(prompt('Please enter a number between 1 and 100: '));
let grade;

if (score < 1 || score > 100) {         // Invalid integer
    console.log('Only scores between 1 and 100 are accepted');
}
else if (score < 60) {                  // F
    console.log('You recieved an F');
}
else if (score < 70) {                  // D
    console.log('You recieved a D');
}
else if (score < 80) {                  // C
    console.log('You recieved a C');
}
else if (score < 90) {                  // B
    console.log('You recieved a B');
}
else if (score <= 100) {                 // A
    console.log('You recieved an A');
}
else {                                  // For if user enters a string
    console.log('Non integer input')
}