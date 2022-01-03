import { Component } from "solid-js"
import { AddFileMenu } from "../Components/FileManagement/AddFileMenu"
import { DragDropFolder } from "../Components/FileManagement/DragDropFolder"
import { Layout } from "../Components/Layout"

export const Library:Component = () => {
    return (<>
            <Layout/>
        <div>
            <DragDropFolder/>
            <AddFileMenu/>
        </div>
        </>
    )
}
