const init = {
    count: 0
}

const counterReducer = (state=init, action) => {
   
    switch (action.type) {
        case 'counter/increment': //feature/action
        return {
            ...state,
            count: state.count+action.payload
        }

        case 'counter/decrement':
        return {
            ...state,
            count: state.count-action.payload
        }

        default: 
        return state;        
    }

}

export default counterReducer;