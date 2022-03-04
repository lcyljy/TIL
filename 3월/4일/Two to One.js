/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// # Solution

function longest(s1, s2) {
  // your code
 
  return [...new Set(s1 + s2)].sort().join('');
}

// 두 문자열을 더한 다음 set을 이용하여 중복제거, sort를 이용해 내림차순 정리, join을 통해 문자열로 변환
