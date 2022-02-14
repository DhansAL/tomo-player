import create from "solid-zustand";
import { FileFolderServed } from "../interfaces/FileManagement/FileFolderServed";
/**
 * Handles the current global file params which are consumed by various components
 */

export const fileFolderStore = create<FileFolderServed>((initialState) => ({
  lastModified: 0,
  name: "",
  path: "",
  size: 0,
  lastWatch: false,
}));
