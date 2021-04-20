export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}

export type StudentsType = Array<StudentType>

export const students: StudentsType = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Elise",
        age: 22,
        isMarried: true,
        scores: 105
    }
]

export type UserType = {
    name: string
    age: number
    friends: Array<string>
}
export const user: UserType = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

// 1
export const copyUser: UserType = {...user}

// 2
export const deepCopyUser: UserType = {
    ...user,
    friends: [...user.friends]
}

// 3
export const copyStudents: StudentsType = [...students]

// 4
export const deepCopyStudents: StudentsType = students.map(st=>({...st}))

// 5
export const sortByName: StudentsType = students.map(st=>({...st})).sort((a, b) => a.name > b.name ? 1 : -1)

// 5(a)
export const sortByScores: StudentsType = students.map(st=>({...st})).sort((a, b) => b.scores - a.scores)

// 6
export const bestStudents: StudentsType = students.filter(st => st.scores>100)

// 6(a)
export const deepCopyStudents2: StudentsType = students.map(st=>({...st}))
    .sort((a, b) => b.scores - a.scores)
export const topStudents: StudentsType = deepCopyStudents2.splice(0, 3)

// 6(b)
export const newDeepCopyStudents: StudentsType = [
    ...topStudents.map(st=> ({...st})),
    ...deepCopyStudents2.map(st=> ({...st}))
]

// 7
export const notMarriedStudents: StudentsType = students.filter(st => !st.isMarried)

// 8
export const studentsNames: Array<string> = students.map(st => st.name)

// 8(a)
export const namesWithSpaces = studentsNames.join(' ')
export const namesWithComma = studentsNames.join()

// 9
export const trueStudents = students.map(st => ({...st, isStudent: true}))

// 10
export const studentsWithMarriedNick: StudentsType =
    students.map(st => st.name === 'Nick' ? {...st, isMarried: true} : {...st})

// 11
export const Elise: StudentType | undefined = students.find(st => st.name === 'Elise')

// 12
export const bestStudent: StudentType = students.reduce((acc, st) => acc.scores < st.scores ? st : acc)

// 13
export const scoresSum = students.reduce((acc, st) => acc + st.scores, 0)

// 14
export const addFriends = (students: StudentsType) => {
    let copyStudents = []
    for(let i = 0; i < students.length; i++) {
        let friends = []
        for(let j = 0; j < students.length; j++) {
            if(j !== i) {
                friends.push(students[j].name)
            }
        }
        copyStudents[i] = {...students[i], friends: friends}
    }
    return copyStudents
}

export const studentsWithFriendsList =  addFriends(students)
