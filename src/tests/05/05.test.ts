import {setTechnologiesMentors, TechType} from './05'

let technologies: Array<TechType>

beforeEach(()=> {
    technologies = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]
})

test("mentors should be in their technologies", ()=>{
    // data

    // action
    const techMentors = technologies.map(setTechnologiesMentors)

    // expectations
    expect(techMentors.length).toBe(5)
    expect(techMentors[0].title).toBe("HTML&CSS")
    expect(techMentors[0].mentor.split(' ').pop()).toBe("Sveta")
    expect(techMentors[2].mentor.split(' ').pop()).toBe("Viktor")
    expect(techMentors[4].mentor.split(' ').pop()).toBe("Valera")
})