const fs = require('fs');
const path = require('path')

fs.readdir(path.join('C:\Users\andre\OneDrive\Documentos\GitHub\JavaScript\CFBCursos\Curso de Javascript Moderno - Aula 01'))
.then((files) => {console.log(files)})

console.log('Olá mundo de novo!');