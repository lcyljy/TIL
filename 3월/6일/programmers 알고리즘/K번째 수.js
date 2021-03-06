/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
  array의 길이는 1 이상 100 이하입니다.
  array의 각 원소는 1 이상 100 이하입니다.
  commands의 길이는 1 이상 50 이하입니다.
  commands의 각 원소는 길이가 3입니다.

입출력 예
array	commands	return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
*/

// Solution
function solution(array, commands) {
  // array = [];
  // commands = [[i,j,k], [i1, j1, k1] ...]
  var answer = [];
  var check = [];
  for (let i = 0; i < commands.length; i++) {
    check = array.slice(commands[i][0] - 1, commands[i][1]);
    check = check.sort((a, b) => a - b);
    answer.push(Number(check.slice(commands[i][2] - 1, commands[i][2])));
    check = [];
  }
  return answer;
}
// 프로그래밍 언어에서 0부터 카운트가 시작되는데
// 해당 문제에서는 i,j,k 번째 숫자를 정렬하다보니
// 해당 위치를 정확하게 찾는데 시간이 오래걸림.
// 해당 위치에 대해 인지하고 작성했는데 오타가있었는지 해당 문제가 풀리지 않았고, 결국 전부 초기화한 후 다시 작성한 후에야 문제 해결 완료.

// 코드를 첫번째로 작성한 후 case2 에서 막혔었는데
// 해당 문제는 sort()의 파라미터값을 설정해주니 바로 해결되었다.