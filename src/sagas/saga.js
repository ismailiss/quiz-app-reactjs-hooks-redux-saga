import { put, call, takeLatest } from 'redux-saga/effects'
import { GET_DATA, GET_DATA_FAILED, GET_DATA_SUCCESS, GET_DATA_LOADING } from '../store/actionsType'
import axios from 'axios'
function fetchDataApi() {
    return axios('https://my-json-server.typicode.com/ismailiss/fake-api/questions')
        .then(response => ({ response }))
        .catch(error => ({ error }))
}
function* getDataAsync() {
    console.log("getDataAsync");
    const { response, error } = yield call(fetchDataApi)
    if (response)
        yield put({ type: GET_DATA_SUCCESS, data: response.data })
    else
        yield put({ type: GET_DATA_FAILED, error })
}
export function* watchGetData() {
    console.log("watchGetData");
    yield takeLatest(GET_DATA, getDataAsync)
}
