#!/usr/bin/env node

import data11 from "../index.js";
//const { data11 } = require('../index.js')
import { program } from "commander";
//const { Command } = require('commander');
//const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .arguments("<filepath1> <filepath2>")
  .version("0.8.0")
  .option("-f, --format [type]", "Output format")
  .action((path1, path2) => {
    console.log(data11(path1, path2));
  })
  .parse();

export default program;
