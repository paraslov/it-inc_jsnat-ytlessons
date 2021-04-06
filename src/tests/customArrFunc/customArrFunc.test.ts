import {customFilter, customFind, customMap} from './customArrFunc';

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

