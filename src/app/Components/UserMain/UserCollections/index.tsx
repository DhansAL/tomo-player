import { Button, ListGroup, Modal } from "solid-bootstrap";
import { createSignal, For, onMount } from "solid-js";
import { getCollections } from "../../../apiEvents/collections/getcollections";
import "../../../scrollbar.css"

export const GetUserCollections = () => {
    const [collectionNames, setCollectionNames] = createSignal(null)
    const [error, setError] = createSignal(null)
    //modal utils
    const [show, setShow] = createSignal(false);

    const handleGetCollections = async () => {
        const namesArr = await getCollections()
        if (namesArr.error) {
            //incase user exists but havent added any shows and still checking for shows in db
            setError(namesArr.error)
            setShow(true)
            return;
        }
        setCollectionNames(namesArr)
        setShow(true)
    }
    const handleClose = () => {
        setError(null)
        setCollectionNames(null)
        setShow(false)
    };

    return <div>
        <Button variant="secondary" onClick={handleGetCollections}>Check</Button>

        <Modal
            show={show()}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <div
                class=" m-1 bg-dark p-3 d-flex flex-column "

            >
                <h4 class="text-light">name of shows in database</h4>
                {error() == null ? null : <p class="text-warning">{error()}</p>}
                {collectionNames() != null ? (
                    <>
                        <ListGroup className="  overflow-scroll scrollbar-primary " style={{ height: "300px" }} >
                            <For each={collectionNames()}>
                                {/* TODO: set type declarations */}
                                {(name: any, i) =>
                                    <ListGroup.Item>{name.name}</ListGroup.Item>
                                }
                            </For>
                        </ListGroup>

                    </>
                ) : null}
            </div>
        </Modal>
    </div>

};
