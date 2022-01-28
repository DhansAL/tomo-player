import { Button, Badge } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";


export const Online = () => {
    const [online, setOnline] = createSignal(null)
    createEffect(() => {
        if (navigator.onLine) setOnline("OK")
        else setOnline("NOT ONLINE")
    })

    return <div>
        <Button variant="light">
            <span class="text-black">Online </span>
            <Badge bg="info">
                {online()}
            </Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    </div>;
};
