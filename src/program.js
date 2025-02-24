import gendiff from "../index.js";
//const { program } = require('commander')
import { program } from "commander";

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .arguments("<filepath1> <filepath2>")
  .version("0.8.0")
  .option("-f, --format [type]", "Output format", 'stylish')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  })
  .parse();

export default program;