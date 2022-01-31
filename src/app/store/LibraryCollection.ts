import create from "solid-zustand";
interface LibraryParams {
  collectionPath: string;
}
/**
 * Handles the collection paths for subs and video
 * have to make it a signal rather string for reactivity
 */
// const [collectionPath, setCollectionPath] = createSignal(null); not working
export const LibraryStore = create<LibraryParams>(() => ({
  collectionPath: null,
}));
