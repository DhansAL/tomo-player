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
                <Offcanvas.Body >
                    <p class="text-light"> UNLOCK NEW FEATURES</p>
                    {/* route to pro component */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};
