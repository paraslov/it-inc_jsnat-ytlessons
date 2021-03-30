import {student} from "./02";


test("technologies names should be HTML, CSS or React", () => {
    // data
    // student

    // action
    // creation of student

    // expectation
    expect(student.name).toBe('Sergio')
    expect(student.technologies[0].name).toBe("HTML")
    expect(student.technologies[1].name).toBe("CSS")
    expect(student.technologies[2].name).toBe("React")
})