const initState = {
    isAuth: false,
    count: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'AUTH':
            console.log('Auth REDUX get triggled')
            console.log(state)
            return {
                ...state,
                isAuth: state.isAuth = true
            }
        case 'UNAUTH': 
            console.log(state)
            return {
                ...state,
                isAuth: state.isAuth = false
            }
        case 'INCREMENT': 
        return {
            ...state,
            count: state.count + 1
        }
        default:
            return state;
    }
}

export default reducer