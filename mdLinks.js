//module.exports = () => {
  // ...
//}; // modulo fetch
const fetch = require('node-fetch');

//filesystem module
const fs = require('fs');

//path module
const path = require('path');


// verificar existencia de path
const pathExistance = (selectedPath) => fs.existsSync(selectedPath); 


// Para validar si es absoluta

const absoluteVerify = (selectedPath) => {

  if (path.isAbsolute(selectedPath)) { //metodo para validar si es absoluta
    return selectedPath;
  } else {
    return path.resolve(selectedPath); //método para volverla absoluta
  }  
};

// para validar si es md
const pathExtension = (path) => extname(path) === '.md';

// Para leer el archivo
const readFile = (absolutePath) => {
  return fs.readFileSync(absolutePath, 'utf-8');
};

//extraer links de archivos md

function getLinks (selectedpath){
  const readFileAbsolute = readFile(absolutePath); 
  const expectHtppArray = readFileAbsolute.match(expectTextHtpp);
  if (expectHtppArray == null){
    return []
  }
  const arrayObjectLinks = expectHtppArray.match((links) => {
  const expectLinks = /\[[^\s]+(.+?)\]/gi;
  const textLinks = links.match(expectLinks);
  const expectHTTP = /\((https?.+?)\)/gi;
  const linkHttp = links.match(expectHTTP);
  const objectLinks = {
    href: (textLinks)[0].slice(1, -1),
    text: (linkHttp)[0].slice(1, -1),
    file: absolutePath,
  };
  return objectLinks;
 });
 return arrayObjectLinks;
};






// npm const route = 'README.md';

module.exports = {
  pathExistance, absoluteVerify,pathExtension, readFile, getLinks
}
