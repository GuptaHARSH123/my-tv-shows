import { ActionCreator } from ".";
import {Show} from "../modules/show";

export const SHOWS_LOADED= "SHOWS_LOADED";

export const ShowLoadedAction:ActionCreator<Show[]>=(shows:Show[] )=>(
    {
        type:SHOWS_LOADED, 
        payload: shows
    }
)

export const SHOWS_QUERY_CHANGE = "SHOWS_QUERY_CHANGE"
export const ShowsQueryChangeAction : ActionCreator<string>=(query)=>(
    {
        type :SHOWS_QUERY_CHANGE,
        payload: query
    }
)

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED"

export const showLoadedAction : ActionCreator<Show>=(show:Show)=>(
    {
        type : SHOW_DETAIL_LOADED,
        payload:show
    }
)

export const LOADED_SHOW_ACTION = "LOADED_SHOW_ACTION"

export const loadedShowAction : ActionCreator<number>=(showId:number)=>(
    {
        type : LOADED_SHOW_ACTION,
        payload:showId
    }
)