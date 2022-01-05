import { Component, useContext } from "solid-js"
import { AddFileMenu } from "../Components/FileManagement/AddFileMenu"
import { DragDrop } from "../Components/FileManagement/DragDrop"
import { Layout } from "../Components/Layout"
import { LibraryMain } from "../Components/LibraryMain"



export const Library:Component = () => {
 
    return (<>
            <Layout/>
       
        <div>
            <AddFileMenu/>
            <DragDrop isFile={true} />
            <LibraryMain/>
        </div>
        </>
    )
}
