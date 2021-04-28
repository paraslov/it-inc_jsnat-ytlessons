

export function sum(...numbers: number[]) {
    return numbers.reduce((acc, num) => acc + num)
}

export function triangleType(a: number, b: number, c: number) {
    let maxSide = Math.max(a, b, c)
    if (sum(a, b, c) - maxSide <= maxSide) {
        return 'incorrect'
    }
    if(a === b && b === c) {
        return 'same sides'
    } else if (a === b || b === c || c === a) {
        return 'same hips'
    } else if (sum(a, b, c) - maxSide > maxSide) {
        return 'regular'
    }  else {
        return 'something goes wrong'
    }
}

export function numsSum(num: number){
    return num
        .toString()
        .split('')
        .reduce((acc, num) => acc+(+num), 0)
}