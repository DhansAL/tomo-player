import {
  createSignal,
  createContext,
  JSXElement,
  Setter,
  Accessor,
} from "solid-js";
import { FileFolderServed } from "../interfaces/FileManagement/FileFolderServed";

type FileFolderContextType = {
  propertiesForAll: Accessor<FileFolderServed>;
  setPropertiesForAll: Setter<FileFolderServed>;
};
type FileFolderContextProviderProps = {
  children: JSXElement;
};
export const FileFolderContext = createContext<FileFolderContextType>(
  null
);

export const FileFolderContextProvider = (
  props: FileFolderContextProviderProps
) => {
  // pass file or folder info of one item per time so no need to store all in an array
  const [propertiesForAll, setPropertiesForAll] = createSignal<FileFolderServed>(
    { lastModified: 0, name: "", path: "", size: 0 }
  );
  return (
    <FileFolderContext.Provider
      value={{ propertiesForAll, setPropertiesForAll }}
    >
      {props.children}
    </FileFolderContext.Provider>
  );
};
