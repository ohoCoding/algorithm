function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
console.log(solution([1,8,3]));