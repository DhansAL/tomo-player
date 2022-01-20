import { Button, Modal } from "solid-bootstrap"
import { createSignal } from "solid-js"
import { DragDrop } from "./DragDrop";

type DragDropProps = {
    isfile: boolean;
}
export const DragDropModal = (props: DragDropProps) => {
    const [show, setShow] = createSignal(false);


    const handleOpen = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    }

    return (
        <div >
            <Button variant="success" onClick={handleOpen}>add collection or play video</Button>

            <Modal
                show={show()}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    {/* select folder collection on library */}
                    <DragDrop isFile={props.isfile} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

