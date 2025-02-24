
import plain from './plain.js'
import stylish from './stylish.js'
import json from './json.js';

const format = (data, format) => {
  const formats = {
    stylish: stylish,
    plain: plain, 
    json: json,
  };
  return formats[format](data)
};
export default format;
