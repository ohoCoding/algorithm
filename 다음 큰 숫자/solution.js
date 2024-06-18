// countOne(num)은 자연수를 입력받고 2진수 변환 후 1의 갯수를 세어주는 함수
function countOne(num) {
    let count = 0; 
    ejin = num.toString(2).split('');
    console.log(ejin);
    for(let i = 0; i < ejin.length; i++) {
        if (ejin[i] == 1) { 
            count++; 
        }
    }
    console.log("count", count);
    return count; 
}
// 반복문과 countOne(num)을 통해 n의 1의 갯수와 다음 자연수들의 1의 갯수를 비교하고, 일치하는 값을 찾았을 때 멈추는 함수
function solution(n) {
    let testNum = n;
    while(true) {
        testNum++; 
        if(countOne(testNum) == countOne(n)) return testNum;
    }
}
console.log(solution(10));