function multiplyWithCallback(numbers,callback) {
    const result = numbers.map(num=>num*2)
    callback(result)
}
const numbers = [1,2,3,4,5]
function callbackbyFunction (result) {
    console.log("result: ",result)
}
multiplyWithCallback(numbers,callbackbyFunction)