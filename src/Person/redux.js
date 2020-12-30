// action types
const GET_PERSON_LIST = "GET_PERSON_LIST";
const PERSON_LIST = "PERSON_LIST";
const API_CALL_FAILURE = "API_CALL_FAILURE";
// reducer with initial state
const initialState = {
    fetching: false,
    personlist: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PERSON_LIST:
            return { ...state, fetching: true, error: null };
        case PERSON_LIST: 
            return { ...state, fetching: false, personlist: action.personlist };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, personlist: null, error: action.error };
        default:
            return state;
    }
}