export const myList = (id) =>{
    return {type:'MY_LIST',payload:id}
}

export const removeList = (id) =>{
    return {type:'REMOVE_LIST',payload:id}
}