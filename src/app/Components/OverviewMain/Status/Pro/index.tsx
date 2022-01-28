import { Button, Offcanvas } from "solid-bootstrap";
import { createSignal } from "solid-js";

export const Pro = () => {


    const [show, setShow] = createSignal(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Button variant="secondary" onClick={handleOpen}>GO PRO!</Button>

            <Offcanvas className="bg-dark h-50" placement="bottom" show={show()} onHide={handleClose}>
                <Offcanvas.Header >
                    <Offcanvas.Title> <h4 class="text-light"> UNLOCK NEW FEATURES</h4></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <p class="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia ea ad ducimus illum officiis cumque? Maxime, in soluta harum recusandae, atque eaque repellat repudiandae voluptates ipsam deleniti laudantium commodi?</p>

                    <p class="text-light">track your progress and have fun with "{"BOT"}"</p>
                    <Button variant="success">
                        <a class="text-decoration-none text-light" href="#pro">Have a look!</a>
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};
