function solution(n) {
  let answer = 0;
  // now = 현재 더하고 있는 수, count = 현재 더하고 있는 식의 가장 첫 번째 수, plusNum = 현재 더해진 결과값
  let now = 1, count = 1, plusNum = 0;

  while(count <= n) {
    //plusNum에 now를 더해주며 while문을 실행했다
    plusNum = plusNum + now;
    // 만약 plusNum이 주어진 수 n보다 크거나 같다면 plusNum은 초기화
    // 첫번째 수인 count 증가 & now에 count 대입
    if(plusNum >= n) {
      if(plusNum === n) answer++;
      plusNum = 0;
      count++;
      now = count;
    } else {
    // 만약 plusNum이 주어진 수 n 보다 작으면 now에 1을 더한 후 넘어간다
      now++;
    }
  }

  return answer;
}

// test
console.log(solution(15)); // 4