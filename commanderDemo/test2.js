#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .option('--no-sauce', 'Remove sauce')
  .parse(process.argv);

console.log('you ordered a pizza');
if (program.sauce) console.log('  with sauce');
else console.log(' without sauce');
