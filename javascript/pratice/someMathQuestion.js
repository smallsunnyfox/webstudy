// 判断一个数是不是质数
function judgeZS(num) {
    var isZS = true;
    //只能被1和自身整除的数字就是质数
    //也就是说 如果能找到除了1和自身之外的 其他的数字 如果能整除 就说明不是质数
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {//说明num可以被其他的数字整除 也就说明num不是质数
            isZS = false;
        }
    }
    return isZS;
}
// 取n以内的质数
function findZS(n) {
    //取遍n以内的数字 看看是不是质数 如果是就输出到控制台
    for (var i = 2; i <= n; i++) {
        if (judgeZS(i)) {
            console.log(i);
        }
    }
}
// 获取一个数的所有因数
function findAllYZ(num){
    var YZ = ''
    // 一个数的因数一定不可能大于他的一半 所以循环条件是 i<=num/2
    for (var i=1; i<= num/2; i++) {
        if (num%i === 0) {
            YZ += i + ' '
        }
    }
    return YZ
}
