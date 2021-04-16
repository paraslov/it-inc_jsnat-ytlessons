export type TeacherType = {
    name: string
    spec: string
    id: string
}

export type TeachersType = {
    [key: string] : TeacherType
}

const teachers: TeachersType = {
    '123' : {name: 'Robert', spec: 'JS', id: '123'},
    '124' : {name: 'Alina', spec: 'html&css', id: '124'},
    '125' : {name: 'Harry', spec: 'ReactJS', id: '125'},
    '126' : {name: 'Suzan', spec: 'NodeJS', id: '126'},
}

export const replaceTeacher = (teachers: TeachersType, teacher: TeacherType, replaceId: string): TeachersType => {
    let copyTeachers = {...teachers,
    [teacher.id] : teacher}
    delete copyTeachers['125']
    return copyTeachers
}

export const changeTeacherName = (teachers: TeachersType, newName: string, replaceId: string): TeachersType => ({
    ...teachers,
    ['125'] : {...teachers['125'], name: newName}
})

export const changeTeacherId = (teachers: TeachersType, currentId: string, replaceId: string): TeachersType => {
    let copyTeachers = {
        ...teachers,
        [replaceId] : {...teachers[currentId], id: replaceId}
    }
    delete copyTeachers[currentId]
    return copyTeachers
}

