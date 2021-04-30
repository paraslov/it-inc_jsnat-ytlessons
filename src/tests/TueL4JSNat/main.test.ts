import {
    getBanknoteList,
    getBanknoteListAssociateArray,
    isSquareGreater,
    numsSum,
    sum,
    sumEvenOdd,
    triangleType
} from './main';

test('func sum should return sum off all its parameters', () => {
    let result = sum(2, 4, 6, -4)
    let result2 = sum(2, 4, 4, -4, 10, 100, -20, 0)

    expect(result).toBe(8)
    expect(result2).toBe(96)
})

test('triangleType func should return correct type of triangle', () => {
    expect(triangleType(1, 1, 1)).toBe('same sides')
    expect(triangleType(4, 3, 3)).toBe('same hips')
    expect(triangleType(4, 3, 5)).toBe('regular')
    expect(triangleType(2, 3, 5)).toBe('incorrect')
    expect(triangleType(2, 2, 5)).toBe('incorrect')
    expect(triangleType(100, 53, 78)).toBe('regular')
})

test('sum of number numbers', () => {
    expect(numsSum(123)).toBe(6)
    expect(numsSum(15233)).toBe(14)
    expect(numsSum(764)).toBe(17)
})

test('sum of even index numbers in arr should be greater than odd', () => {
    expect(sumEvenOdd([2, 4, 2, -3, 10, 12])).toBe(true)
    expect(sumEvenOdd([2, 4, 2, -3, 10, 15])).toBe(false)
    expect(sumEvenOdd([-200, 300, 500, 637, 78, 25, -57, 64, 89, 0])).toBe(false)
    expect(sumEvenOdd([2, 4, 2, -3, 10, 13])).toBe('equal')
})

test('should return true if circle can be placed in square', () => {
    expect(isSquareGreater(4, 3.14)).toBe(true)
    expect(isSquareGreater(100, 100)).toBe(false)
    expect(isSquareGreater(144, 100)).toBe(true)
    expect(isSquareGreater(144, 300)).toBe(false)
    expect(isSquareGreater(-144, 100)).toBe('Error: areas should be more than zero')
    expect(isSquareGreater(144, -100)).toBe('Error: areas should be more than zero')
})

test('banknote list', () => {
    let result1500 = getBanknoteList(1500)
    let result23 = getBanknoteList(23)
    let result26439 = getBanknoteList(26439)
    let result38788 = getBanknoteListAssociateArray(38788)
    let result1253914 = getBanknoteListAssociateArray(1253914)

    console.log('38788: ', result38788)
    console.log('1253914', result1253914)

    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
    expect(result26439).toStrictEqual([
        5000, 5000, 5000, 5000, 5000,
        1000,
        100, 100, 100, 100,
        20,
        10,
        5,
        2, 2
    ])
})
