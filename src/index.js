import path from "path";
import fs from "fs";
import parser from "./parser.js";
import _ from "lodash";
import formatPlusAndMinus from "./formators/formator1.js";

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) =>
  parser(
    fs.readFileSync(getFullPath(filepath), "utf-8"),
    extractFormat(filepath)
  );

const data11 = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  return formatPlusAndMinus(gendiff1(data1, data2));
  //console.log(parser(fs.readFileSync(fullFilePath1, ('utf-8')), extractFormat(filepath1)))
  //  console.log(JSON.parse(fs.readFileSync(fullFilePath1, 'utf-8')))
  // console.log(fs.readFileSync(fullFilePath2, 'utf-8'))
};

const gendiff1 = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort();

  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!Object.hasOwn(data1, key)) {
      return { type: "added", key, oldValue: null, newValue: value2 };
    } else if (!Object.hasOwn(data2, key)) {
      return { type: "deleted", key, oldValue: value1, newValue: null };
    } else if (value1 === value2) {
      return { type: "unchanged", key, oldValue: value1, newValue: null };
    } else {
      return { type: "changed", key, oldValue: value1, newValue: value2 };
    }
  });
};
// if (_.isPlainObject(value1) && _.isPlainObject(value1)) {
// return{ type: 'nested' key, gendiff1(value1, value2), value }
// }
export default data11;
