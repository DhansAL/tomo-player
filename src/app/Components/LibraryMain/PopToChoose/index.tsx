import { Button, Modal } from "solid-bootstrap"
import { createSignal } from "solid-js"
import { DragDrop } from "../../FileManagement/DragDrop";
export const PopToChoose = () => {
    const [show, setShow] = createSignal(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>add collection</Button>

            <Modal
                show={show()}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <DragDrop isFile={true} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
