import { Button, Badge } from "solid-bootstrap";


export const Streak = () => {
    return <div>
        <Button variant="warning">
            <span class="text-black">Streak </span>
            <Badge bg="info"> 0</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    </div>;
};
