const fs = require('fs');
const randomWord = require('random-word');

// Read the config file
const config = JSON.parse(fs.readFileSync('config.json'));

// Get the number of html and js files to create
const numHtmlFiles = config.HTML_FILES_AMOUNT;
const numJsFiles = config.JS_FILES_AMOUNT;

randomWord();

// Function to generate a random file name using words from the list
const generateRandomFileName = () => {
  let fileName = '';
  for (let i = 0; i < config.WORDS_PER_FILE; i++) {
    fileName += randomWord();
  }
  return fileName.slice(0, -1); // Remove the last dash
}

// Generate the html files
for (let i = 0; i < numHtmlFiles; i++) {
  const fileName = `output/html/${generateRandomFileName()}.html`;
  fs.writeFileSync(fileName, `<html><p>To nie tu</p></html>`);
  console.log(`Created file: ${fileName}`);
}

// Generate the js files
for (let i = 0; i < numJsFiles; i++) {
  const fileName = `output/js/${generateRandomFileName()}.js`;
  fs.writeFileSync(fileName, `console.log("${generateRandomFileName()}");`);
  console.log(`Created file: ${fileName}`);
}
