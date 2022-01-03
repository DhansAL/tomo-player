import { AddFileMenu } from "../Components/FileManagement/AddFileMenu"
import { DragDropFile } from "../Components/FileManagement/DragDropFile"
import { Layout } from "../Components/Layout"

export const Library = () => {
    return (<>
            <Layout/>
        <div>
            <DragDropFile/>
            <AddFileMenu/>
        </div>
        </>
    )
}
