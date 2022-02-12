import { Button, Modal, Spinner } from "solid-bootstrap";
import { createSignal } from "solid-js";
import { deleteUserCollection } from "../../../apiEvents/collections/deleteCollection";
//TODO: set a global spinner

/**
 *
 * @description delete online collection
 */
export const DeleteUserCollection = () => {
    const [resMesg, setResMesg] = createSignal(null);
    const [isLoading, setIsLoading] = createSignal(false);

    const deleteCollection = async () => {
        setIsLoading(true)
        const res = await deleteUserCollection();
        setResMesg(res);
        setIsLoading(false)

    };

    //modal utils
    const [show, setShow] = createSignal(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => {
        setResMesg(null)
        setShow(false)
    };
    return (
        <div>
            <Button variant="secondary" onclick={handleOpen}>Proceed to delete</Button>

            <Modal
                show={show()}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                class="bg-dark"
            >

                <div
                    class="m-1 p-4 d-flex flex-column bg-dark "
                >

                    <h5 class="text-warning">You are about to delete your whole online collection.</h5>
                    <Button variant="danger" onclick={deleteCollection}>Delete anyway?</Button>
                    {isLoading() ?
                        <div class="m-3">
                            <Spinner variant="light" animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                        :
                        resMesg() != null ? <p class="text-info">{resMesg()}</p> : null
                    }

                </div>
            </Modal>

        </div>
    );
};
