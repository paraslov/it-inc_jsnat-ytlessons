import {StudentType} from "../02/02";
import {activateStudent, addTech, studentCity} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 10001,
        name: "Sergio",
        age: 35,
        isActive: false,
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
})

test("should add tech 'JS' to student", () => {
    // data
    // common data from beforeEach student

    // action
    addTech(student, 'JS', "Junior")

    //expectations
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].name).toBe('JS')
})

test("should make student 'isActive': true", () => {
    // data
    // common data from beforeEach student

    // action
    activateStudent(student)

    // expectations
    expect(student.isActive).toBe(true)
})

test("does student live in Krasnogorsk?", () => {
    // data
    // common data from beforeEach student

    // action
    const res1 = studentCity(student, "Moscow")
    const res2 = studentCity(student, "Krasnogorsk")

    // expectations
    expect(res1).toBe(false)
    expect(res2).toBe(true)
})