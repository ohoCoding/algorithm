const solution = (str) => {
    let answer = '';
    const arr = str.split(" ");
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    answer = min +' '+ max;
    return answer;
}
console.log(solution("-1 -2 -3 -4"));