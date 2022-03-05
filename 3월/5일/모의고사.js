/*
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.
*/

// 1,2,3번 수포자들에 대해서 정의를 내리고 문제를 풀려고하니 런타임 에러가 나왔다. 

function solution(answers) {
    var answer = [];
    // answers : 정답이 적혀잇는 배열
    // 가장 많은 문제를 맞힌 사람만 출력하면 됨.
    const student1 = [];
    for(let j =0; j<answers.length; j++){
        for(let i=0; i<5; i++){
            student1.push(i+1)
        }
    }
    // student1에 대한 배열을 정리. 배열의 길이는 answers(답안)의 길이만큼
    // 해당 배열의 값은 1부터 5까지 반복
    const student2 = [];
      // student2에 대한 배열을 정리, 배열의 길이는 answers(답안)의 길이만큼
    // 해당 배열의 2n+1번째 값은 항상 2, 2n번째 값은 1, 4n번째 값은 3, 6n번째값은 4, 8n번째 값은 5, 10n은 다시 1
    // 해당 값의 정리를 어떻게 해야하는가.
    // 2n-1의 값과 2n+1의 값을 비교하여 1을 더한다. 만약 2n-1의 값이 5이면 1을 넣는다.?
    for(let j=0; j<answers.length; j++){
    switch(j%2 == 0){
        case (true) : student2.push(2);
            break;
        case (false) : // j%2 == 0 이 아니니까. 홀수번째 값이라는 건데
            // j = 0,1,2,3,4,5,6,7,8,9
            // x = 2,1,2,3,2,4,2,5,2,1
            if (student2[j-2] == undefined || student2[j-2] == 5){
                student2.push(1);
            } else if (student2[j-2] == 1) {
                student2.push(3);
            } else {
                student2.push(student[j-2]+1)
            }
        }   
    }
    const student3 = [];
    // student3에 대한 배열을 정리, 배열의 길이는 answers(답안)의 길이만큼
    // 3311224455 반복
    // [3,3,1,1,2,2,4,4,5,5]
    // j = 0,1,2,3,4,5,6,7,8,9,10
    // x = 3,3,1,1,2,2,4,4,5,5,3
    for(let j =0; j<answers.length; j++){
        if (j%10 == 0 || j%10 == 1) {
            student3.push(3)
        } else if (j%10 == 2 || j%10 == 3){
            student3.push(1)
        } else if (j%10 == 4 || j%10 == 5){
            student3.push(2)
        } else if (j%10 == 6 || j%10 == 7){
            student3.push(4)
        } else if (j%10 == 8 || j%10 == 9){
            student3.push(5)
        }
    }
    
    // student 1 ~ 3의 배열 정의 완료.
    // answers[j]의 값과 student[j]의 값을 비교하여 같은 경우 count 횟수 증가
    // count 횟수가 가장 높은 경우 해당 student의 번호를 출력
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for(let j=0; j<answers.length; j++){
        if (answers[j] == student1[j]) {
            count1 += 1;
        }
        if (answers[j] == student2[j]) {
            count2 += 1;
        }
        if (answers[j] == student3[j]) {
            count3 += 1;  
        }   
    }
    const max = Math.max(count1,count2,count3)
    if( count1 == max) {
        answer.push(1)
    }
    if (count2 == max) {
        answer.push(2)
    }
    if( count3 == max) {
        answer.push(3)
    }
    return answer;
}
