import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const format = (data, format1) => {
  const formats = {
    stylish: stylish,
    plain: plain,
    json: json,
  };
  return formats[format1](data);
};
export default format;

// const format = (result, format) => {
//   switch (format) {
//     case 'stylish':
//       return stylish(result);
//     case 'plain':
//       return plain(result);
//     case 'json':
//       return json(result);
//     default:
//       throw Error(`incorrect format "${format}"`);
//   }
// };
// export default format;