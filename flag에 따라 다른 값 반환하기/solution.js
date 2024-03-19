const solution = ( a, b, flag) => {
    if(flag){
        return a+b
    }else{
    return a-b
    }
}
console.log(solution(10,5, true));