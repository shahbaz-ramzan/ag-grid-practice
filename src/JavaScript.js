function recursion(number) {
    if (number == 1 || number == 0) {
        return 1
    }
    else if(number>1){
        return number * recursion(number - 1)
    }
}
console.log(recursion(2))