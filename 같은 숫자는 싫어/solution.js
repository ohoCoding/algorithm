const solution = (arr) => {
    var answer = [];
    for(let i = 0;  i < arr.length; i++) {
        // 만약 i번째와 i번+1 번째의 숫자가 같지않다면 answer 배열에 push
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}
console.log(solution([1,1,3,3,0,1,1]));