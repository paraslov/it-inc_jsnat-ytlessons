
//* custom array functions ====================================================================>


export const customMap = (array: Array<any>, func: (el: any) => any) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray[i] = func(array[i])
    }
    return newArray
}

export const customFilter = (array: Array<any>, func: (el: any) => any) => {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(func(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray
}

export const customFind = (array: Array<any>, func: (el: any) => any) => {
    for(let i = 0; i < array.length; i++) {
        if(func(array[i])) {
            return array[i]
        }
    }
}

export const customReduce = (array: Array<any>, func: (acc: any, el: any) => any, Acc?: any) => {
    let acc = array[0]
    let i = 1
    if(Acc) {
        acc = Acc
        i = 0
    }
    for(i; i<array.length; i++) {
        acc = func(acc, array[i])
    }
    return acc
}