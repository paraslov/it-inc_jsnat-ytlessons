import {numsSum, sum, triangleType} from './main';

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
