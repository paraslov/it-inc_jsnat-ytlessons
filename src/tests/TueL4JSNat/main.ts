export function sum(...numbers: number[]) {
    return numbers.reduce((acc, num) => acc + num)
}

export function triangleType(a: number, b: number, c: number) {
    let maxSide = Math.max(a, b, c)
    if (sum(a, b, c) - maxSide <= maxSide) {
        return 'incorrect'
    }
    if (a === b && b === c) {
        return 'same sides'
    } else if (a === b || b === c || c === a) {
        return 'same hips'
    } else if (sum(a, b, c) - maxSide > maxSide) {
        return 'regular'
    } else {
        return 'something goes wrong'
    }
}

export function numsSum(num: number) {
    return num
        .toString()
        .split('')
        .reduce((acc, num) => acc + (+num), 0)
}

export function sumEvenOdd(arr: number[]) {
    let sumEven: number = 0
    let sumOdd: number = 0
    arr.forEach((el, i) => i % 2 === 0 ? sumEven += el : sumOdd += el)
    if (sumEven > sumOdd) return true
    else if (sumEven < sumOdd) return false
    else if (sumEven === sumOdd) return 'equal'
    return 'something goes wrong'
}

export function isSquareGreater(square: number, circle: number) {
    if (square <= 0 || circle <= 0) {
        return 'Error: areas should be more than zero'
    }
    let squareSide = Math.sqrt(square)
    let radiusCircle = Math.sqrt(circle / Math.PI)
    if (squareSide === radiusCircle * 2) return true
    return squareSide / 2 > radiusCircle
}

// const banknotes = [5000, 1000,500,100,50,20,10,5,2,1]

export function getBanknoteList(moneyAmount: number) {
    let arr: number[] = []
    while (moneyAmount > 0) {
        if (moneyAmount >= 5000) {
            arr.push(5000)
            moneyAmount -= 5000
            continue
        }
        if (moneyAmount >= 1000) {
            arr.push(1000)
            moneyAmount -= 1000
        } else if (moneyAmount < 1000 && moneyAmount >= 500) {
            arr.push(500)
            moneyAmount -= 500
        } else if (moneyAmount < 500 && moneyAmount >= 100) {
            arr.push(100)
            moneyAmount -= 100
        } else if (moneyAmount < 100 && moneyAmount >= 50) {
            arr.push(50)
            moneyAmount -= 50
        } else if (moneyAmount < 50 && moneyAmount >= 20) {
            arr.push(20)
            moneyAmount -= 20
        } else if (moneyAmount < 20 && moneyAmount >= 10) {
            arr.push(10)
            moneyAmount -= 10
        } else if (moneyAmount < 10 && moneyAmount >= 5) {
            arr.push(5)
            moneyAmount -= 5
        } else if (moneyAmount < 5 && moneyAmount >= 2) {
            arr.push(2)
            moneyAmount -= 2
        } else if (moneyAmount === 1) {
            arr.push(1)
            moneyAmount = 0
        }
    }
    return arr
}

// const banknotes = [5000, 1000,500,100,50,10,5,2,1]

export function getBanknoteListAssociateArray(moneyAmount: number) {
    let arr = {
        ['5000']: 0,
        ['1000']: 0,
        ['500']: 0,
        ['100']: 0,
        ['50']: 0,
        ['10']: 0,
        ['5']: 0,
        ['2']: 0,
        ['1']: 0,
    }

    while (moneyAmount > 0) {
        if (moneyAmount >= 5000) {
            arr['5000'] += 1
            moneyAmount -= 5000
            continue
        }
        if (moneyAmount >= 1000) {
            arr['1000'] += 1
            moneyAmount -= 1000
        } else if (moneyAmount < 1000 && moneyAmount >= 500) {
            arr['500'] += 1
            moneyAmount -= 500
        } else if (moneyAmount < 500 && moneyAmount >= 100) {
            arr['100'] += 1
            moneyAmount -= 100
        } else if (moneyAmount < 100 && moneyAmount >= 50) {
            arr['50'] += 1
            moneyAmount -= 50
        } else if (moneyAmount < 50 && moneyAmount >= 10) {
            arr['10'] += 1
            moneyAmount -= 10
        } else if (moneyAmount < 10 && moneyAmount >= 5) {
            arr['5'] += 1
            moneyAmount -= 5
        } else if (moneyAmount < 5 && moneyAmount >= 2) {
            arr['2'] += 1
            moneyAmount -= 2
        } else if (moneyAmount === 1) {
            arr['1'] += 1
            moneyAmount = 0
        }
    }
    return arr
}

