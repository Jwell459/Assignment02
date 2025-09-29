let coinFlip = Math.round(Math.random());       // 0 =  heads, 1 = tails
let coinFlipString;
let choice = prompt('Enter heads or tails: ');
let result;
let conjunction;

if (coinFlip === 0) {
    coinFlipString = 'heads';
}
else {
    coinFlipString = 'tails';
}

if (choice === 'heads') {
    if (coinFlip == 0) {
        result = 'win'
        conjunction = 'and'
    }
    else if (coinFlip == 1) {
        result = 'lose'
        conjunction = 'but'
    }
}
else if (choice === 'tails') {
    if (coinFlip == 0) {
        result = 'lose'
        conjunction = 'but'
    }
    else if (coinFlip == 1) {
        result = 'win'
        conjunction = 'and'
    }
}

alert('The flip was ' + coinFlipString + ' ' + conjunction + ' you chose ' + choice + '...you ' + result + '!')