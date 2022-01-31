import {
    createSignal,
    createContext,
    JSXElement,
    Setter,
    Accessor,
} from "solid-js";


type LibraryContextType = {
    //for now
    pathOfCollection: Accessor<string>;
    setPathOfCollection: Setter<string>;
}

type LibraryContextProviderProps = {
    children: JSXElement
}

/**
 * @description  context sharing active collection
 *  file path between sibling components of libraryMain component.
 * 
 * TODO: replace this with zustand.
 * tried applying zustand but component didnt rerendered after changing store.state
 * 
 */
export const LibraryContext = createContext<LibraryContextType>(null);

export const LibraryContextProvider = (props: LibraryContextProviderProps) => {
    //passing the path of current collection for now
    const [pathOfCollection, setPathOfCollection] = createSignal<string | null>(null);

    return (
        <LibraryContext.Provider
            value={{ pathOfCollection, setPathOfCollection }}
        >
            {props.children}
        </LibraryContext.Provider>
    )
}
