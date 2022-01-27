import { Layout } from "../Components/Layout"
import { DragDropModal } from "../Components/FileManagement/DragDropModal"
import { createEffect, createSignal } from "solid-js"
import { Login } from "../Components/Auth/Login"


export const Overview = () => {
    const [online, setOnline] = createSignal("offline")
    createEffect(() => {
        if (navigator.onLine) {
            setOnline("online")
        }
    })

    return (
        <>
            <Layout />
            <div>
                overview component.

                <div>
                    <DragDropModal isFile={false} />
                    <hr />
                    <DragDropModal isFile={true} />
                    {online()}
                </div>
                <h3>to save your collections list online and access discord bot features
                    login!</h3>
                <div class="m-5">
                    <Login />
                </div>
            </div>
        </>
    )
}
