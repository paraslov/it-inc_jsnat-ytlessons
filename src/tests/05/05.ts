const technologies: TechType[] = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JavaScript', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false},
    {id: 4, title: 'Rest API', isDone: false},
    {id: 5, title: 'GraphQL', isDone: false},
]

export type TechType = {
    id: number
    title: string
    isDone: boolean
}


export const setTechnologiesMentors = (tech: TechType) => {
    let mentor = 'Dymych'
    if(tech.id === 1) {
        mentor += ", Sveta"
    } else if(tech.id === 2 || tech.id === 3) {
        mentor += ", Viktor"
    } else {
        mentor += ", Valera"
    }
    return {id: tech.id, mentor: mentor, title: tech.title}
}