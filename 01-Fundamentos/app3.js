const { count } = require('console');
const fs = require('fs');

const content = fs.readFileSync('README.md','utf8');

const words = content.split(' ');
// const reactWordCount = words.filter(word => word.toLocaleLowerCase().includes('react'));
const reactWordCount = content.match(/react/gi);


console.log(`Palabras: ${words.length}`);

console.log(`Palabras React: ${reactWordCount.length}`);
