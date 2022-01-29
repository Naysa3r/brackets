module.exports = function check(str, bracketsConfig) {

  const OPEN_BRACKETS = bracketsConfig.map(value => value[0]);
  const DUAL_BRACKETS = Object.fromEntries(bracketsConfig.map(value => [value[1], value[0]]));

  let stack = [];

  for (let i = 0; i < str.length; i++){
    let curChar = str[i];

    if (OPEN_BRACKETS.includes(curChar)) {
      if (DUAL_BRACKETS[curChar] !== curChar){
        stack.push(curChar);
      } else {
        if (curChar === stack[stack.length - 1]){
        stack.pop();
        } else {
          stack.push(curChar);
        }
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let stackTop = stack[stack.length - 1];
      (DUAL_BRACKETS[curChar] === stackTop) ? stack.pop() : false;
    }
  }
  return stack.length === 0;
}