# justin-server-deployment-practice

Lab 1

## Notes from the demo

  Create & clone repo

   1. MIT license
   1. NodeJS gitignore
   1. `npm init`
   1. `npm install --save express dotenv`
   1. `npm install --save-dev jest supertest`
   1. Edit package.json scripts:
   1. `"start": "node index.js"`
   1. `"test": "jest --coverage"`
   1. Copy `index.js`, `server.js`
   1. Copy `handlers/`, `middleware/`
   1. Copy `__tests__` and demo jest
   1. `npx jest`
   1. `npx jest --watch`
   1. `npx jest --coverage`
   1. `npm test`
   1. Copy `.github/` and show actions
   1. Push to new repo

## Notes

Importing and Exporting Modules
If one module exports a function or an object ...

// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
Another module can import and use that function or object

const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
