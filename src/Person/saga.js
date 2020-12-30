import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

function fetchPersonList() {
    return axios({
        method: "get",
        url: `http://localhost:3000/users`
    });
}

function* getPersonList() {
    try {
        const response = yield call(fetchPersonList);        
        const personlist = response.data;

        // dispatch a success action to the store with the new dog
        yield put({ type: "PERSON_LIST", personlist });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

export function* watcherSaga() {
    yield takeLatest("GET_PERSON_LIST", getPersonList);
}