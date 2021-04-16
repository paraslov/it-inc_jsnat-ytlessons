import {customFilter, customFind, customMap, customReduce} from './customArrFunc';

let users: Array<any>

beforeEach(() => {
    users = [
        {id: 1, name: "Vasya"},
        {id: 2, name: "Petya"},
        {id: 3, name: "Slava"},
        {id: 4, name: "Lera"},
    ]
})

test("customMap test: should creat greetings for all users", () => {
    // action
    let greetings = customMap(users, (u: any) => {
        return `Hello, ${u.name} with ${u.id} id!`
    })
    // expectations
    expect(greetings.length).toBe(4)
    expect(greetings[2]).toBe('Hello, Slava with 3 id!')
    expect(greetings[3]).toBe('Hello, Lera with 4 id!')
})

test("customFilter test: should filter out users with id more than 2", () => {
    // action
    let filteredUsers = customFilter(users, (user) => {
        return user.id > 2
    })

    // expectations
    expect(filteredUsers.length).toBe(2)
    expect(filteredUsers[0].name).toBe("Slava")
    expect(filteredUsers[1].name).toBe("Lera")
})

test("customFind test: should find correct element", () => {
    // action
    let foundedUser1 = customFind(users, (user) => {
        return user.id === 2
    })
    let foundedUser2 = customFind(users, (user) => {
        return user.name === 'Lera'
    })

    // expectations
    expect(foundedUser1.name).toBe("Petya")
    expect(foundedUser2.id).toBe(4)
})

test("js reduce testing users id should increment 10", () => {
    // action
    let newUsers = users.reduce((acc, u) => {
        acc.push({...u, id: u.id + 10})
        return acc
    }, [])

    // expectations
    expect(newUsers[3].id).toBe(14)
    expect(newUsers[0].id).toBe(11)
})

test("customReduce testing users id should increment 10", () => {
    // action
    let newUsers = customReduce(users, (acc, u) => {
        acc.push({...u, id: u.id + 10})
        return acc
    }, [])

    // expectations
    expect(newUsers[3].id).toBe(14)
    expect(newUsers[0].id).toBe(11)
})

test("customReduce testing with sum elements", () => {
    // data
    const numbers = [13, 12, 44, -55, 26, 17, 88, 0, 92, -33, -1, 8, -22]
    // action
    let maxNumber = customReduce(numbers, (maxNum, num) => maxNum < num ? num : maxNum)
    let minNumber = customReduce(numbers, (minNum, num) => minNum > num ? num : minNum)
    let sum = customReduce(numbers, (sum, num) => sum + num)
    let sum2 = numbers.reduce((sum, num) => sum + num)

    // expectations
    expect(maxNumber).toBe(92)
    expect(minNumber).toBe(-55)
    expect(sum).toBe(189)
    expect(sum2).toBe(189)
})

