/*
Question. Find the divisors

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

// Solution

function divisors(integer) {

  // integer 값이 주어지면 해당 값을 1부터 integer값까지 나눠서 나머지가 0이되는 값을 찾는다.
  // 해당 값들을 배열안에 넣어서 정리한다.
  // 만약 해당 배열의 길이가 0인경우 "integer is prime"을 출력한다.
  let answer = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      answer.push(i);
    }
  }
  if (answer.length == 0) {
    answer = integer + " is prime"
  };
  return answer;
};