let langCode = prompt('Please enter a language code: ');
let lang = None;
let transString = None;

if (langCode == 'es') {
    lang = 'Spanish';
    transString = 'Hola Mundo';
}
else if (langCode == 'de') {
    lang = 'German';
    transString = 'Hallo Welt';
}
else if (langCode == 'fr') {
    lang = 'French';
    transString = 'Bonjour le monde';
}
else {          // Default to English
    lang = 'English';
    transString = 'Hello World'
}

console.log('Hello World translated in ' + lang + ' is: ' + transString)
