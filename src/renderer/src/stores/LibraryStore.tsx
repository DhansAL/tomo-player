import { createStore } from 'solid-js/store';

type AvailableTablesInLibrary = "showList" | "episodeList"


export interface LibraryStore {
    visibleLibraryComponent: AvailableTablesInLibrary

}
/**
 * at the time of commit, even after unwraping the store obj (initialplayervalue), it dosen't sets the store to its initial value after
 * setting it on a cleanup function, maintaining seperate objects for that. add keys to whatever you add down on initial values of store
 */
export const initialPlayerValue = {

}


export const LibraryStore = createStore<Partial<LibraryStore>>({
    visibleLibraryComponent: "showList"
});
