import { searchShows } from "../api";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { useState,useEffect, FC } from "react";
import { Show } from "../modules/show";
import { ShowLoadedAction , ShowsQueryChangeAction } from "../actions/shows";
import { connect, Connect, ConnectedProps } from "react-redux";
import { State } from "../reducers/show";
import { showsLoadingSelector, showsQuerySelector , showsSelector } from "../slectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
export type ShowListPageProps = {
  
} & ReduxProps

const ShowListPage :FC<ShowListPageProps>=({ 
   query,
   shows ,
   showsQueryChange,
   loading

})=> {
  return (
    <div className="mt-2">
      <div>
      <SearchBar
      value ={query}
      onChange={(event)=>{
        showsQueryChange(event.target.value);
      }}
       />
      </div>
      {loading && <LoadingSpinner></LoadingSpinner>}
      <div className="flex flex-wrap justify-center">
       {shows.map((s)=>(
        <ShowCard
         key={s.id}
         show={s}
         />
       ))}
      </div>
    </div>
  );
}

const mapDispatcherToProps ={
  showsQueryChange:ShowsQueryChangeAction
}

const mapStateToProps = (state:State)=>{
  return {query:showsQuerySelector(state),
          shows:showsSelector(state),
          loading :showsLoadingSelector(state)
  }
}
const connector =  connect(mapStateToProps, mapDispatcherToProps)
type ReduxProps = ConnectedProps<typeof connector>

export default connector(ShowListPage);
