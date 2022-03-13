/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// 문제 해석
// 문자열을 두문자 쌍으로 분할하여 솔루션을 작성
// 문자열이 홀수개인경우 마지막에 _를 붙인다.

// Solution 1차 시도
function solution(str) {
  let answer = new Array();
  let test = "_"
  if (str.length % 2 == 1) {
    str + test;
  }
  // str의 길이를 2로 나누었을때 나머지가 1이면 _바를 붙이려고했다.
  for (let i = 0; i < str.length; i += 2) {
    answer.push(str.slice(i, i + 2));
  }

  return answer;
}
// 1차시도 결과 '_'가 들어가지 않는다
// expected [ 'ab', 'cd', 'ef', 'g' ] to deeply equal [ 'ab', 'cd', 'ef', 'g_' ]

//Solution 2차시도
function solution(str) {
  let answer = new Array();
  let test = "_"
  //    if(str.length%2 == 1) {
  //      str + test;
  //    }
  for (let i = 0; i < str.length; i += 2) {
    answer.push(str.slice(i, i + 2));
  }
  if (answer[answer.length - 1].length !== 2) {
    answer[answer.length - 1] += test;
  }
  // 먼저 값들을 나누어 answer에 집어넣은다음 마지막 배열의 값의 길이가 2가 아닌경우 "_"를 넣고자 했다.
  return answer;
}

// 2차시도 결과d
// TypeError: Cannot read property 'length' of undefined
//     at solution (test.js:11:30)
//     at Context.<anonymous> (test.js:24:22)
//     at processImmediate (internal/timers.js:464:21)

// 

// 3차시도 
function solution(str) {
  let answer = new Array();
  let test = "_"
  if (str.length % 2 == 1) {
    str = str + test;
  }
  for (let i = 0; i < str.length; i += 2) {
    answer.push(str.slice(i, i + 2));
  }
  //   if(answer[answer.length-1].length !== 2){
  //   answer[answer.length-1] += test;
  //     }
  return answer;
  ;
}
// str + test 값을 str에 넣어주지 않아서 값이 적용이 안된거였다.

// 4차시도 (2차시도를 다시)
function solution(str) {
  let answer = new Array();
  let test = "_"
  //    if(str.length%2 == 1) {
  //      str + test;
  //    }
  for (let i = 0; i < str.length; i += 2) {
    answer.push(str.slice(i, i + 2));
  }
  if (answer[answer.length - 1].length !== 2) {
    answer[answer.length - 1] += test;
  }
  // 먼저 값들을 나누어 answer에 집어넣은다음 마지막 배열의 값의 길이가 2가 아닌경우 "_"를 넣고자 했다.
  return answer;
}