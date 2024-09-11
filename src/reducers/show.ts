import { produce } from "immer";
import { AnyAction } from "redux";
import {} from "../actions";
import { Show } from "../modules/show";
import { SHOW_DETAIL_LOADED, SHOWS_LOADED, SHOWS_QUERY_CHANGE } from "../actions/shows";
import { normalize, schema, Schema } from "normalizr";
export type State = {
    
    shows:  {[showId: number]: Show} ;
    query_shows:{[query:string]:number[]};
    query:string;
    show_loading :{[showId :number]:boolean};
    loading:boolean;
    
}
  
export const intialState :State = {
  shows:{},
  query_shows:{},
  query :"",
  show_loading :{},
  loading:false
}

function showReducer(state = intialState , action:AnyAction): State{
    switch(action.type){
       case SHOWS_LOADED:
        return produce(state, (draft)=>{
            const shows = action.payload as Show[];
            if(!shows || shows.length===0){
                return
            }
            draft.loading = false
            const showSchema = new  schema.Entity("shows");
            const normalizedData = normalize(shows, [showSchema]);
            draft.query_shows[draft.query]= normalizedData.result 
            draft.shows = {...draft.shows , ...normalizedData.entities.shows}
            

        })
        case SHOWS_QUERY_CHANGE:
            return produce(state, (draft)=>{
                draft.query = action.payload
                draft.loading=true
            })
        case SHOW_DETAIL_LOADED:
            return produce(state , (draft)=>{
                const show = action.payload as Show
                draft.shows[show.id]=show
               
            })


        default:
            return state;
    }

}
export default showReducer;
