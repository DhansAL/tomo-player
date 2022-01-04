import {
  createSignal,
  createContext,
  JSXElement,
  Setter,
  Accessor,
} from "solid-js";

type FileFolderContextType = {
  propertiesForAll: Accessor<FolderFileServed> | null;
  setPropertiesForAll: Setter<FolderFileServed>;
};
type FileFolderContextProviderProps = {
  children: JSXElement;
};
export const FileFolderContext = createContext<FileFolderContextType | null>(
  null
);

export const FileFolderContextProvider = (
  props: FileFolderContextProviderProps
) => {
  // pass file or folder info of one item per time so no need to store all in an array
  const [propertiesForAll, setPropertiesForAll] = createSignal<
    undefined | null | FolderFileServed
  >({ lastModified: 0, name: "", path: "", size: 0 });
  return (
    <FileFolderContext.Provider
      value={{ propertiesForAll, setPropertiesForAll }}
    >
      {props.children}
    </FileFolderContext.Provider>
  );
};
