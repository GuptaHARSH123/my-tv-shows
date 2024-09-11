import { applyMiddleware, combineReducers, createStore } from "redux";
import showReducer from "./src/reducers/show";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery, takeLatest } from "redux-saga/effects";
import { LOADED_SHOW_ACTION, SHOWS_QUERY_CHANGE } from "./src/actions/shows";
import { fetchShows, fetchShowsDetails } from "./src/sagas/shows";

const reducer = combineReducers({
    shows:showReducer
});

function * rootSaga(){
    yield debounce(200, SHOWS_QUERY_CHANGE , fetchShows);
    yield takeEvery(LOADED_SHOW_ACTION , fetchShowsDetails)

}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof reducer>;

export default store;