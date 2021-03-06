import { Component, useContext } from "solid-js"
import { Layout } from "../Components/Layout"
import { LibraryMain } from "../Components/LibraryMain"

export const Library: Component = () => {

    return (<>
        <Layout />
        <div>
            <LibraryMain />
        </div>
    </>
    )
}
