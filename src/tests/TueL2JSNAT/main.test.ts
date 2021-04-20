import {
    bestStudent,
    bestStudents,
    copyStudents,
    copyUser,
    deepCopyStudents,
    deepCopyStudents2,
    deepCopyUser, Elise, namesWithComma, namesWithSpaces, newDeepCopyStudents, notMarriedStudents,
    scoresSum,
    sortByName,
    sortByScores,
    students, studentsNames, studentsWithFriendsList, studentsWithMarriedNick, StudentType,
    topStudents, trueStudents,
    user
} from './main';

test('1: copyUser shouldn be shallow copy of user', () => {
    expect(user).not.toBe(copyUser)
    expect(user.name).toBe(copyUser.name)
    expect(user.friends).toBe(copyUser.friends)
})

test('2: deepCopyUser should be a deep copy of user', () => {
    expect(user).not.toBe(deepCopyUser)
    expect(user.name).toBe(deepCopyUser.name)
    expect(user.friends).not.toBe(deepCopyUser.friends)
})

test('3: copyStudents should be a shallow copy of students', () => {
    expect(copyStudents.length).toBe(6)
    expect(copyStudents).not.toBe(students)
    expect(students[0]).toBe(copyStudents[0])
    expect(students[3]).toBe(copyStudents[3])
})

test('4: deepCopyStudents should be a deep copy of students', () => {
    expect(deepCopyStudents.length).toBe(6)
    expect(deepCopyStudents).not.toBe(students)
    expect(students[3]).not.toBe(deepCopyStudents[3])
    expect(students[3].name).toBe(deepCopyStudents[3].name)
})

test('5: sortByName should sort students by names', () => {
    expect(sortByName.length).toBe(6)
    expect(sortByName[0].name).toBe('Alex')
    expect(sortByName[1].name).toBe('Bob')
    expect(sortByName[5].name).toBe('Nick')
})

test('5(a): sortByScores should sort students by scores with higher first', () => {
    expect(sortByScores.length).toBe(6)
    expect(sortByScores[0].name).toBe('Nick')
    expect(sortByScores[1].name).toBe('Helen')
    expect(sortByScores[5].name).toBe('Bob')
})

test('6: bestStudents should return students with score higher than 100 points', () => {
    expect(bestStudents.length).toBe(4)
    expect(bestStudents[0].name).toBe('Nick')
    expect(bestStudents[1].name).toBe('John')
    expect(bestStudents[2].scores).toBe(110)
    expect(bestStudents[3].name).toBe('Elise')
})

test('6(a): topStudents should be three best students', () => {
    expect(topStudents.length).toBe(3)
    expect(topStudents[0].name).toBe('Nick')
    expect(topStudents[1].name).toBe('Helen')
    expect(topStudents[2].scores).toBe(105)
    expect(deepCopyStudents2.length).toBe(3)
})

test('6(b): newDeepCopyStudents should be students, sorted by scores', () => {
    expect(newDeepCopyStudents.length).toBe(6)
    expect(newDeepCopyStudents).not.toBe(deepCopyStudents2)
    expect(newDeepCopyStudents[0].name).toBe('Nick')
    expect(newDeepCopyStudents[1].name).toBe('Helen')
    expect(newDeepCopyStudents[2].scores).toBe(105)
})

test('7: should be notMarriedStudents array', () => {
    expect(notMarriedStudents.length).toBe(3)
    expect(notMarriedStudents[0].name).toBe('Nick')
    expect(notMarriedStudents[1].name).toBe('John')
    expect(notMarriedStudents[2].isMarried).toBe(false)
})

test('8: studentsNames should be an array of students names', () => {
    expect(studentsNames.length).toBe(6)
    expect(studentsNames[0]).toBe('Bob')
    expect(studentsNames[2]).toBe('Nick')
    expect(studentsNames[5]).toBe('Elise')
})

test('8(a): should be strings namesWithSpaces and namesWithComma', () => {
    expect(namesWithSpaces).toBe("Bob Alex Nick John Helen Elise")
    expect(namesWithComma).toBe("Bob,Alex,Nick,John,Helen,Elise")
})

test('9: trueStudents should have property isStudent: true', () => {
    expect(trueStudents.length).toBe(6)
    expect(trueStudents[0].isStudent).toBe(true)
    expect(trueStudents[2].isStudent).toBe(true)
    expect(trueStudents[5].isStudent).toBe(true)
})

test('10: studentsWithMarriedNick should have Nick isMarried:true', () => {
    expect(studentsWithMarriedNick.length).toBe(6)
    expect(studentsWithMarriedNick[2].name).toBe('Nick')
    expect(studentsWithMarriedNick[2].isMarried).toBe(true)
})

test('11: Elise should be an obj with name Elise', () => {
    let eliseCopy
    Elise ? eliseCopy = Elise : eliseCopy = {}
    expect(eliseCopy.name).toBe('Elise')
    expect(eliseCopy.age).toBe(22)
})

test('12: bestStudent should be obj with name Nick', () => {
    expect(bestStudent.name).toBe('Nick')
    expect(bestStudent.scores).toBe(120)
})

test('13: scoresSum should be sum of all students scores', () => {
    expect(scoresSum).toBe(610)
})

test('14: studentsWithFriendsList should have property friends as array of all ' +
    'students names without their own name', () => {
    expect(studentsWithFriendsList.length).toBe(6)
    expect(studentsWithFriendsList[0].friends).toStrictEqual(['Alex', 'Nick', 'John', 'Helen', 'Elise'])
    expect(studentsWithFriendsList[0].name).toStrictEqual('Bob')
    expect(studentsWithFriendsList[2].friends).toStrictEqual(['Bob', 'Alex', 'John', 'Helen', 'Elise'])
    expect(studentsWithFriendsList[2].name).toStrictEqual('Nick')
    expect(studentsWithFriendsList[4].friends).toStrictEqual(['Bob', 'Alex', 'Nick', 'John', 'Elise'])
    expect(studentsWithFriendsList[4].name).toStrictEqual('Helen')
})

