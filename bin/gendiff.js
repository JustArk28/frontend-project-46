#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('0.8.0')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  })
  .parse();

export default program;
//import program from '../src/program.js';
// import commander from 'commander';
// import gendiff from '../index.js';

// commander
//   .version('0.0.1')
//   .description('Compares two configuration files and shows a difference.')
//   .option('-f, --format [type]', 'output format', 'stylish')
//   .arguments('<filepath1> <filepath2>')
//   .action((filepath1, filepath2) => {
//     const diff = gendiff(filepath1, filepath2, commander.format);
//     console.log(diff);
//   });

// commander.parse(process.argv);
