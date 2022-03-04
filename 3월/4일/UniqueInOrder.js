//////////////////////////////////////
/* Unique in Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/
////////////////////////////////////////
# solution

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  iterable.toString();
  let arr = [];
  if(Array.isArray(iterable) !== true){
  arr = iterable.split('');
    } else {
      arr = iterable
    }
  for(let i=0; i<arr.length; i++){
    if ( arr[i] == arr[i+1]){
      arr.splice(i,1);
      i--;
    }
  }
  let result = arr
  return result;

}

// 처음에는 모든 입력값에 대해 split을 이용하여 배열로 바꾼다음 문제를 풀었는데, 애초에 주어진 값이 배열인 경우를 감안하지 못해서
// 한참 해멨다가 배열이 아닌 경우에만 배열값으로 변환하는 식을 넣어서 문제를 해결.

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
