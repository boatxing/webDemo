#!/usr/bin/env node

var program = require('commander');

program
  .command('rm <dir>')
  .option('-r, --recursive', 'Remove recursively')
  .option('-f, --force [type]', 'Remove force')
  .action(function (dir, cmd) {
      console.log("=====cmd.options:", cmd.options);
    console.log('remove ' + dir + (cmd.recursive ? ' recursively' : '') + (cmd.force ? ' force ' + cmd.force : ''))
  })

program.parse(process.argv)
