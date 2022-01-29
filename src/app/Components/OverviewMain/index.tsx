import { AddOrPlay } from "./AddOrPlay"
import { StatusView } from "./Status"

export const OverviewMain = () => {
    return (
        <div
            class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
            <StatusView />
            <AddOrPlay />
        </div >


    )
}
