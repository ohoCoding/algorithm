function solution(n)
{
    const arr = n.toString().split('');
    console.log("arr", arr);
    return arr.reduce(
        (acc,cur) =>
            acc+ Number(cur),
             0 );
}
console.log(solution([1234]));