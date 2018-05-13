const fs = require('fs');
var mkdirp = require('mkdirp');
const moduleName = process.argv[2];
const modulePath = process.argv[3] || './src/components/';

const jsTemplate = `
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './${moduleName}.css';
const ${moduleName} = props => ();

export default ${moduleName}`;

const packageTemplate = `
{
  "name": "${moduleName}",
  "version": "0.0.0",
  "private": true,
  "main": "./${moduleName}.js"
}`;


mkdirp(`${modulePath}${moduleName}`, function (err) {
  if(err) return console.log(err);
  fs.writeFile(`${modulePath}${moduleName}/${moduleName}.js`, jsTemplate, function (err) {
    if (err) return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
  });
  fs.writeFile(`${modulePath}${moduleName}/${moduleName}.css`, '', function (err) {
    if (err) return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
  });

  fs.writeFile(`${modulePath}${moduleName}/package.json`, packageTemplate, function (err) {
    if (err) return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
  });
});
