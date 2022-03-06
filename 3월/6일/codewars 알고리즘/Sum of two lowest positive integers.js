/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

// 문제 해석
// 최소 4개 이상의 값이 주어진 배열이 주어진다.
// 해당 배열에서 가장 작은 값 2개를 더한 값을 출력할 것

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1]
}