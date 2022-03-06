/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
ALGORITHMS
*/


// Solution

function findOutlier(integers) {
  //your code here
  //문제를 제대로 해석한게 맞는지 모르겠는데
  // 문제는 길이가가 3이상인 배열이 주어진다. 
  // 이 배열은 단 하나의 수를 제외하고는 홀수의 정수로 이루어지거나 짝수의 정수로 이루어진다.
  // 단 하나의 수(이상점)을 찾는 메소드를 구현해라.

  // 길이가 3이상인 배열이 주어진다. 해당 배열은 단 하나의 홀수와 여러개의 짝수로 이루어져있거나, 단 하나의 짝수와 여러개의 홀수로 이루어져있다.
  // 이때 짝수가 많을 경우 홀수를, 홀수가 많을 경우 짝수를 찾아서 출력해라.

  //문제 해결
  // integers는 배열이다. 해당 배열의 값들을 각기 2로 나누고 나머지값이 0인 값을 찾는다. 떨어지는 값을 evenIntegers에 넣고,
  // 해당 배열에서 2로나눠지지 않는 값을 oddIntegers에 넣는다.
  // 두 배열의 길이를 비교하여 짧은 값이 나오는 배열을 찾아서 해당 배열의 값을 출력한다.
  const evenIntegers = [];
  const oddIntegers = [];
  let answer = 0;
  for (let i = 0; i < integers.length; i++) {
    switch (integers[i] % 2 == 0) {
      case true: evenIntegers.push(integers[i])
        break;
      case false: oddIntegers.push(integers[i])
    }
  }

  (evenIntegers.length > oddIntegers.length) ? answer = oddIntegers[0] : answer = evenIntegers[0]
  return answer;
} 