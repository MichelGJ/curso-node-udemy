import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

let outputMessage = '';
const base = yarg.b;
const headerMessage = `
=================================
         TABLA DEL ${base}
=================================   
`;

for (let i = 1; i <= yarg.l; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
};

outputMessage = headerMessage + outputMessage;
if(yarg.s){
    console.log(outputMessage);
}

const outputPath = `outputs/1/2/3`;

fs.mkdirSync(outputPath, {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');
