import {StudentType, TechLvlType} from "../02/02";


export const addTech = (student: StudentType, tech: string, lvl: TechLvlType) => {
    student.technologies.push({
        id: new Date().getTime(),
        name: tech,
        level: lvl
    })
}

export function activateStudent(st: StudentType) {
    st.isActive = true
}

export const studentCity = (st: StudentType, city: string) => {
    return st.adress.city === city
}