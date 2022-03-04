/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org

*/


// # Solution

String.prototype.toJadenCase = function () {
  //...
  // 주어진 문자열을 ' ' 를 기준으로 배열로 나누고
  // 해당 배열을 기준으로 각각의 값의 첫번째 값을 대문자로 바꾸고
  // 대문자로 바꾼 값들을 다시 배열에 넣고. 그 배열들을 합친다.
  let result = '';
  // str = "How can mirrors be real if our eyes aren't real"
  let test = this.split(' ');
  // test  = [How, can, mirrors, be, real, if, our, eyes, aren't, real]
  for(let i =0; i<test.length; i++){
    test[i] = test[i].substr(0, 1).toUpperCase() + test[i].substr(1);
  }
  // test = [How, Can, Mirrors, Be, Real, If, Our, Eyes, Aren't, Real];
  result = test.join(' ');
  return result;
};
