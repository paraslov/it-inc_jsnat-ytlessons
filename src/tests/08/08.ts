

const samurais: SamuraisType = {
    "13445" : {id: 13445, name: "Shiko", weapon: "katana", rank: 4},
    "344" : {id: 344, name: "Riko", weapon: "long sword", rank: 2},
    "55" : {id: 55, name: "Yoshi", weapon: "samurai sword", rank: 2},
    "2678936" : {id: 2678936, name: "Unai", weapon: "katana", rank: 7},
    "42" : {id: 42, name: "Alex", weapon: "samurai sword", rank: 4},
}
type SamuraiType = {
    id: number
    name: string
    weapon: string
    rank: number
}
export type SamuraisType = {
    [key: string] : SamuraiType
}
const samurai = {id: 333747, name: "Tuo", weapon: "katana", rank: 3}
samurais[samurai.id] = samurai


