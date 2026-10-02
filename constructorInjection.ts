class A {
    functionToCall: (...params: any[]) => any
    constructor(functionToCall: (...params: any[]) => any) {
        this.functionToCall = functionToCall
    }
    methodA(...params: any[]){
        console.log(this.functionToCall(...params))
    }
}

function sum(...params: number[]){
    let result = 0
    params.forEach((param: any) => {
        result += param
    })
    return result
}

function multiply(a:number,b:number,c:number){
    return a * b * c
}


const instanceA1 = new A(sum)
const instanceA2 = new A(multiply)

instanceA1.methodA(1,2,8,8)
instanceA1.methodA(4,7)
instanceA2.methodA(1,2,3)