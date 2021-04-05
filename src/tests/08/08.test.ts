import {SamuraisType} from './08';

// Data
let samurais: SamuraisType

beforeEach(() => {
    samurais = {
        "13445" : {id: 13445, name: "Shiko", weapon: "katana", rank: 4},
        "344" : {id: 344, name: "Riko", weapon: "long sword", rank: 2},
        "55" : {id: 55, name: "Yoshi", weapon: "samurai sword", rank: 2},
        "2678936" : {id: 2678936, name: "Unai", weapon: "katana", rank: 7},
        "42" : {id: 42, name: "Alex", weapon: "samurai sword", rank: 4},
    }
})

test("samurai should be deleted", () => {
    // action
    delete samurais['2678936']

    // expectations
    expect(samurais['2678936']).toBeUndefined()
})

test("samurai name should change", () => {
    // action
    samurais['42'].name = 'Alexis'

    // expectations
    expect(samurais['42'].name).toBe('Alexis')
})

test("samurai should be added", () => {
    // action
    const samurai = {id: 333747, name: "Tuo", weapon: "katana", rank: 3}
    samurais[samurai.id] = samurai

    // expectations
    expect(samurais['333747']).toBeDefined()
    expect(samurais['333747'].name).toBe('Tuo')
})