import { Button, Badge } from "solid-bootstrap";


export const Streak = () => {
    return <div class="m-1 p-2 d-flex flex-column justify-content-around align-items-center">
        <span class="text-warning">Streak</span>
        <h4 class="text-light"> 0</h4><span className="visually-hidden">unread messages</span>
    </div>;
};
