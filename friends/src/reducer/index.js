import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCH_START, FETCH_SUCCESS, ADD_START, ADD_SUCCESS, ADD_FAIL, DELETE_START, DELETE_SUCCESS, DELETE_FAIL } from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: ''
}

const rootReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                error: '',
                loggingIn: true,

            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                error: '',
                loggingIn: false,

            }
        case LOGIN_FAIL:
            return{
                ...state,
                error: 'WRONG PASSWORD',
                loggingIn: false
            }
        case FETCH_START:
            return{
                ...state,
                fetchingFriends: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                fetchingFriends: false,
                error: '',
                friends: action.payload
            }
        case ADD_START:
            return{
                ...state,
                savingFriends: true,
                error: ''
            }
        case ADD_SUCCESS: 
            return{
                ...state,
                savingFriends: false,
                friends: action.payload
            }
        case ADD_FAIL: 
            return{
                ...state,
                error: action.payload,
                savingFriends: false
            }
        case DELETE_START:
            return{
                ...state,
                deletingFriend: true,
                error: '',
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                deletingFriend: false,
                error: '',
                friends: action.payload
            }
        case DELETE_FAIL:
            return{
                ...state,
                deletingFriend: false,
                error: action.payload
            }
        default:
            return state;
    }
} 

export default rootReducer;