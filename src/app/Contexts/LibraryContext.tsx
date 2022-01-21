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
