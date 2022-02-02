import { destroyStreak, setStreaking } from "../../..//modules/streak/streak"
import { Button } from "solid-bootstrap"

export const StreakHandler = () => {
    const handleStreakActivation = () => {
        setStreaking();
    }
    const handleStreakDestroy = () => {
        destroyStreak();
    }

    return <div>

        <div style={{ background: "#292d3a" }} class="m-5 d-flex flex-column  h-50 p-4">
            <h4 className="text-light">Activate streaks</h4>
            <p className="text-muted">Activate streaks to stay accountable to your daily progress. These can be synced online to save your streak.</p>
            <p className="text-info">Streak adds up when you play any video. streak updates at 12 AM.</p>
            <div className="d-flex flex-row justify-content-between">
                <Button onclick={handleStreakActivation} variant="success">activate</Button>
                <br />
                <br />
                <Button onclick={handleStreakDestroy} variant="danger">Destroy streak</Button>
            </div>
        </div>
    </div>;
};
