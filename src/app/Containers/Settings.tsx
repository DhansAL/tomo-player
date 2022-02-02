import { Layout } from "../Components/Layout"
import { CollectionFlush } from "../Components/SettingsMain/CollectionFlush"
import { StreakHandler } from "../Components/SettingsMain/SteakHandler"

export const Settings = () => {



    return (
        <>
            <Layout />
            <div
                class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
                <StreakHandler />
                <CollectionFlush />
            </div>
        </>
    )
}
