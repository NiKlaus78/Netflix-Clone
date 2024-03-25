export default (state=[],action) => {
    switch (action.type) {
        case "MY_LIST": 
            return [...state, action.payload];
        case "REMOVE_LIST": 
            return [...state, action.payload - 1];
        
        default:
            return state;
    }
}