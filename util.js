const fs = require('fs');
const {resolve} = require('path');
const [, , command] = process.argv;

const handlers = {
  replacePath() {
    const indexPath = resolve(__dirname, 'src/index.html');
    const indexHtml = fs.readFileSync(indexPath).toString();
    const updated = indexHtml.replace('base href="/"', 'base href="/ng-notable/"');
    fs.writeFileSync(indexPath, updated);
  }
};

if (handlers[command]) {
  handlers[command](process.argv.slice(3));
} else {
  console.log(`Commands available:\n${Object.keys(handlers).map(k => ` - ${k}`).join('\n')}`);
}