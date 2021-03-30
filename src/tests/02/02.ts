type AdressType = {
    country: string
    city: string
    street?: string
    homeNumber?: number
}

type TechType = {
    id: number
    name: string
    level: "Junior" | "Middle" | "Senior"
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    nickname?: string
    adress: AdressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 10001,
    name: "Sergio",
    age: 35,
    isActive: true,
    adress: {
        country: "Russia",
        city: "Krasnogorsk"
    },
    technologies: [
        {id: 676, name: "HTML", level: "Middle"},
        {id: 677, name: "CSS", level: "Middle"},
        {id: 678, name: "React", level: "Junior"}
    ],
}