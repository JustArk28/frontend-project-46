import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const format = (data, format1) => {
  const formats = {
    stylish,
    plain,
    json,
  };
  return formats[format1](data);
};

export default format;
