import axios from "axios"
import { Show } from "./modules/show";

export const searchShows =(Keyword:string)=>{
    return axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q="+Keyword).then((response)=>response.data.map((item)=>item.show));

}

export const loadedShowDeatails =(id:number)=>{
    return axios.get<Show>("https://api.tvmaze.com/shows/"+id).then(
        (response)=>( response.data))
}