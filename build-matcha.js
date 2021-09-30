const execSync = require('child_process').execSync;
const args = process.argv.slice(2);
const color = args;

console.log('entrou', color);
if(args){
  buildPalette();
}


function buildPalette(){
  execSync(`node mpg -c ${color[0]} --format material2 -d ./src/app --file-name church-color-map.scss`, {stdio: 'inherit'});
}


//
// 'ng s #ff7500 '
