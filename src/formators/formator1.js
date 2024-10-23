
const formatPlusAndMinus = (arr) => {
 const result = arr.map((obj) => {   
    switch(obj.type) { 
      case 'deleted':
        return ` - ${obj.key}: ${obj.oldValue}\n`;
      case 'unchanged': 
        return `   ${obj.key}: ${obj.oldValue}\n`
      case 'changed': 
        return ` - ${obj.key}: ${obj.oldValue}\n + ${obj.key}: ${obj.newValue}\n`
        case 'added':
        return ` + ${obj.key}: ${obj.newValue}\n`
        default:
      throw new Error('Something wrong');
    }          
    
  //  if (obj.type === 'deleted') {
  //   return ` - ${obj.key}: ${obj.oldValue}\n`;
  // } else if (obj.type === 'unchanged') {
  //   return `   ${obj.key}: ${obj.oldValue}\n`;
  // } else if (obj.type === 'changed') {
  //  return ` - ${obj.key}: ${obj.oldValue}\n + ${obj.key}: ${obj.newValue}\n`;
  // } else {
  //   return  ` + ${obj.key}: ${obj.newValue}\n}`;
  // }
  
}).join('');
return `{\n${result}}`
};

export default formatPlusAndMinus;