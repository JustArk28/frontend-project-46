import _ from "lodash";

const tab = ' ';
const tabSize = 4;
const offset = 2

const getPrefix = (level, tabSize, offset) => tab.repeat(level * tabSize - offset) 

const checkOfValue = (data, deep) => {
  const formattedValue = _.isPlainObject(data) 
  ? '{' + Object.entries(data).map(([key, value]) => `\n${getPrefix(deep, tabSize, offset - 6)}${key}: ${checkOfValue(value, deep + 1)}`).join(' ') + `\n${getPrefix(deep, tabSize, offset - 2)}}`
  : String(data);
  return formattedValue
};

const stylish = (array) => {
  const depth = (array, level) => {
  const result = array.map((obj) => { 
    switch(obj.type) {
      case 'added':
        return `\n${getPrefix(level, tabSize, offset)}+ ${obj.key}: ${checkOfValue(obj.value, level)}`;
      case 'deleted':
        return `\n${getPrefix(level, tabSize, offset)}- ${obj.key}: ${checkOfValue(obj.value, level)}`;
      case 'changed': 
        return `\n${getPrefix(level, tabSize, offset)}- ${obj.key}: ${checkOfValue(obj.value1, level)}\n${getPrefix(level, tabSize, offset)}+ ${obj.key}: ${checkOfValue(obj.value2, level)}`;
      case 'nested':
        return `\n${getPrefix(level, tabSize, offset)}  ${obj.key}: ${depth(obj.value, level + 1)}`;
      case 'unchanged': 
        return `\n${getPrefix(level, tabSize, offset)}  ${obj.key}: ${checkOfValue(obj.value, level)}`;
        default:
      throw new Error('Something wrong');
    }          
  }).join('');
  return `{${result}\n${getPrefix(level, tabSize, offset + 2)}}`
  }
  return depth(array, 1)
};

export default stylish;
