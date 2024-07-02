const factorial = (num) => {
  return num === 0 ? 1 : num * factorial(num-1);
}
const solution  = (balls, share) => {
  // 서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 조합의 공식이다. 
  // 공식에서 나오는 n!의 !는 팩토리얼(factorial) 기호로, 
  // factorial이란 수학적 용어로 계승을 의미하며, 서로 다른 n개를 나열하는 경우의 수 이다.
  // n! = n(n-1)(n-2)(n-3) … 1
  // 5! (5의 계승) = 5 4 3 2 1 = 120
  // 조합(nCr, Combination)이란 서로 다른 n개 중에 r개를 선택하는 경우의 수를 의미한다. 조합은 뽑는 순서가 중요하지 않다. 순열(nPr, Permutation)과 비슷하지만, 순열의 경우 뽑는 순서가 중요하다.
  // 순열 또한 서로 다른 n개 중에 r개를 선택하는 경우의 수를 의미한다.
  // 조합(nCr) = n! / (n-r)! * r!
  // 순열(nPr) = n! / (n-r)!
  const n = factorial(balls);
  const m = factorial(balls -share);
  const rm = factorial(share);
  const answer = Math.round(n/(m*rm));
  return answer;
}