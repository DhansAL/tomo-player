import { Layout } from "../Components/Layout"
import { DragDropModal } from "../Components/FileManagement/DragDropModal"


export const Overview = () => {
    return (
        <>
            <Layout />
            <div>
                overview component.
                <div>
                    <DragDropModal isfile={false} />
                </div>
            </div>
        </>
    )
}
