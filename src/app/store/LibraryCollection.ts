import create from "solid-zustand";
interface LibraryParams {
  collectionPath: string;
}
/**
 * Handles the collection paths for subs and video
 */
export const LibraryStore = create(() => ({
  collectionPath: null,
}));
