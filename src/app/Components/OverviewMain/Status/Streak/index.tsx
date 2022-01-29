import { Button, Badge } from "solid-bootstrap";


export const Streak = () => {
    return <div class="m-1 p-2">
        <span class="text-warning">Streak </span>
        <Badge bg="info"> 0</Badge>
        <span className="visually-hidden">unread messages</span>
    </div>;
};
