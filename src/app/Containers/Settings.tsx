import { Button } from "solid-bootstrap"
import { Layout } from "../Components/Layout"
import { destroyStreak, setStreaking } from "../modules/streak/streak"

export const Settings = () => {
    const handleStreakActivation = () => {
        setStreaking();
    }
    const handleStreakDestroy = () => {
        destroyStreak();
    }


    return (
        <>
            <Layout />
            <div
                class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
                <div style={{ background: "#292d3a" }} class="m-5 h-50 p-4">
                    <h4 className="text-light">activate streaks</h4>
                    <Button onclick={handleStreakActivation} variant="success">activate</Button>
                    <br />
                    <br />
                    <Button onclick={handleStreakDestroy} variant="danger">destroy streak!</Button>
                </div>
            </div >

        </>
    )
}
