import {mult, splitInWords, sum} from "./01";

// initial data for tests sum and mult
let a: number
let b: number
let c: number

// to save initial data from changes while testing
// we run function beforeEach that refreshes initial data
// before each test
beforeEach( () => {
    a = 1
    b = 2
    c = 3
})

test("sum should be correct", () => {
    // data to work with
    // const a = 1
    // const b = 2
    // a = 100
    // const c = 3

    // action with data
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    // expected result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be correct", () => {
    // data
    // const a = 2
    // const b = 4
    // const c = 3

    // action
    const res1 = mult(a, b)
    const res2 = mult(b, c)

    // expectations
    expect(res1).toBe(2)
    expect(res2).toBe(6)
})

test("splitInWords should give array of words from sentence", () => {
    // data
    const sent1 = 'Hello my friend!'
    const sent2 = 'JS - frontend programming  language.'

    // action
    const res1 = splitInWords(sent1)
    const res2 = splitInWords(sent2)

    // expectations
    expect(b).toBe(2)

    expect(res1.length).toBe(3)
    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('my')
    expect(res1[2]).toBe('friend')

    expect(res2.length).toBe(4)
    expect(res2[0]).toBe('js')
    expect(res2[1]).toBe('frontend')
    expect(res2[2]).toBe('programming')
    expect(res2[3]).toBe('language')
})
