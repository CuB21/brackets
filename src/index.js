module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);
  const arr = str.split('');
  const newArr = [];
  if (str === '') {
    return true;
  }
  if (arr.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '[' || arr[i] === '{' || arr[i] === '(' || arr[i] === '<' || arr[i] === '1' || arr[i] === '3' || arr[i] === '5') {
      newArr.push(arr[i]);
    }
    if (arr[i] === '|' && !newArr.includes('|')) {
      newArr.push(arr[i]);
    } else if (arr[i] === '|' && newArr[newArr.length - 1] === '|') {
      newArr.pop();
    }
    if (arr[i] === '7' && !newArr.includes('7')) {
      newArr.push(arr[i]);
    } else if (arr[i] === '7' && newArr[newArr.length - 1] === '7') {
      newArr.pop();
    }
    if (arr[i] === '8' && !newArr.includes('8')) {
      newArr.push(arr[i]);
    } else if (arr[i] === '8' && newArr[newArr.length - 1] === '8') {
      newArr.pop();
    }
    if (arr[i] === ']' && newArr[newArr.length - 1] === '[') {
      newArr.pop();
    }
    if (arr[i] === '}' && newArr[newArr.length - 1] === '{') {
      newArr.pop();
    }
    if (arr[i] === ')' && newArr[newArr.length - 1] === '(') {
      newArr.pop();
    }
    if (arr[i] === '>' && newArr[newArr.length - 1] === '<') {
      newArr.pop();
    }
    if (arr[i] === '2' && newArr[newArr.length - 1] === '1') {
      newArr.pop();
    }
    if (arr[i] === '4' && newArr[newArr.length - 1] === '3') {
      newArr.pop();
    }
    if (arr[i] === '6' && newArr[newArr.length - 1] === '5') {
      newArr.pop();
    }
  }
  if (newArr.length === 0) {
    return true;
  }
  return false;
}
