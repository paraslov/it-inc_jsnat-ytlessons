test("should pick all completed tasks", () => {
    // initial data
    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]

    // action
    const filteredTasks = tasks.filter(t => t.isDone)

    // expectations
    expect(filteredTasks.length).toBe(2)
    expect(filteredTasks[0].id).toBe(1)
    expect(filteredTasks[1].title).toBe('JavaScript')
})