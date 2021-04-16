import {changeTeacherId, changeTeacherName, replaceTeacher, TeachersType, TeacherType} from './10';

let teachers: TeachersType

beforeEach( () => {
    // data
    teachers = {
        '123' : {name: 'Robert', spec: 'JS', id: '123'},
        '124' : {name: 'Alina', spec: 'html&css', id: '124'},
        '125' : {name: 'Harry', spec: 'ReactJS', id: '125'},
        '126' : {name: 'Suzan', spec: 'NodeJS', id: '126'},
    }
})

test('should replace teacher with id 125 for teacher with id 128', () => {
    // data
    const newTeacher: TeacherType = {name: 'Carl', spec: 'ReactJS', id: '128'}

    // action
    const newTeachers = replaceTeacher(teachers, newTeacher, '125')

    // expectations
    expect(teachers).not.toBe(newTeachers)
    expect(teachers['124']).toBe(newTeachers['124'])
    expect(newTeachers['128'].name).toBe('Carl')
    expect(newTeachers['125']).toBeUndefined()
})

test('should change teacher name with id 125 to Elise', () => {
    // action
    const newTeachers: TeachersType = changeTeacherName(teachers, 'Elise', '125')

    // expectations
    expect(teachers).not.toBe(newTeachers)
    expect(teachers['125']).not.toBe(newTeachers['125'])
    expect(teachers['124']).toBe(newTeachers['124'])
    expect(newTeachers['125']).toBeDefined()
    expect(newTeachers['125'].name).toBe('Elise')
})

test('should change teacher id', () => {
    // action
    const newTeachers: TeachersType = changeTeacherId(teachers, '124', '131')

    // expectations
    expect(teachers).not.toBe(newTeachers)
    expect(teachers['125']).toBe(newTeachers['125'])
    expect(newTeachers['131']).toBeDefined()
    expect(newTeachers['131'].id).toBe('131')
    expect(newTeachers['131'].name).toBe('Alina')
    expect(newTeachers['124']).toBeUndefined()
})