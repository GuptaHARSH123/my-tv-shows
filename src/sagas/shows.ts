import {call,put} from "redux-saga/effects"
import { loadedShowDeatails, searchShows } from "../api"
import { Action } from "../actions"
import { showLoadedAction, ShowLoadedAction } from "../actions/shows"
export function * fetchShows(action:Action): Generator<any, any ,any> {
    const shows = yield call(searchShows, action.payload)
    yield put (ShowLoadedAction(shows))

}
export function * fetchShowsDetails(action:Action): Generator<any, any ,any> {
    const show = yield call(loadedShowDeatails,action.payload)
    yield put(showLoadedAction(show))

}

