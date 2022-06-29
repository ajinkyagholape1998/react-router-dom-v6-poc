const INITIAL_STATE = {
    name: '',
    books: []
}

export default (state = INITIAL_STATE, action: any = {}) => {
    console.log("action => ", action)
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                ...action.content
            };
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
};