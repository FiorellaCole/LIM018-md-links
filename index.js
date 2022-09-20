const resolve = require('resolve');
const { pathExistance, absoluteVerify, pathExtension, getLinks } = require('./mdLinks.js');


const path = 'prueba.md';
const prueba1= '.'

const mdLinks = (path, options) => {
    let newArray = [];
    //verificando existencia de ruta
    if (!pathExistance) {
      reject(new Error('La ruta que ingresaste no es valida, prueba ingresando otra'));
    }
    //verificando si es absoluta
  const absolutePath = absoluteVerify(path);
  if (!pathExtension(absolutePath)){
      reject(new Error('El archivo no es .md, prueba ingresando otro'));
  }
  const arrayObjectLinks = getLinks(pathAbsolute);
  if (!options.validate) {
    links = arrayObjectLinks
    resolve(links);
  }
}
mdLinks(path, { validate: false })  // función de options
  .then((result) => {
    console.log(result);
  });

