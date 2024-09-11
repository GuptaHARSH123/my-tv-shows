import { State } from "../reducers/show";
import { createSelector } from "reselect";
import { Show } from "../modules/show";

// Select the 'shows' part of the state
export const showsStateSelector = (state: State) => state.shows

// Select the 'query' from 'shows' state
export const showsQuerySelector = createSelector(
  showsStateSelector, 
  (showState) => showState.query
);

// Select the 'shows' map (normalized data) from 'shows' state
export const showsMapSelector = createSelector(
  showsStateSelector, 
  (showsState) => showsState.shows
);

export const queryShowsMapSelector = createSelector(
  showsStateSelector, 
  (showsState) => showsState.query_shows
);

export const showsLoadingSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.loading
)


export const showsSelector = createSelector(
  showsMapSelector, 
  showsQuerySelector,
  queryShowsMapSelector,
  (showsMap, query, queryShowsMap) => 
    queryShowsMap[query] ? queryShowsMap[query].map((showId) => showsMap[showId]) : []
);
