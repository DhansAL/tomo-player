import { Button, ListGroup } from "solid-bootstrap";
import { createSignal, For, onMount } from "solid-js";
import { getCollections } from "../../../apiEvents/collections/getcollections";

export const GetUserCollections = () => {
    const [collectionNames, setCollectionNames] = createSignal(null)
    const [error, setError] = createSignal(null)

    const handleGetCollections = async () => {
        const namesArr = await getCollections()
        if (namesArr.msg) {
            //incase user exists but havent added any shows and still checking for shows in db
            setError(namesArr.msg)
            return;
        }
        setCollectionNames(namesArr)
    }
    return <div>
        <div class=" m-4 p-2 d-flex flex-column " style={{ background: "#292d3a" }}>
            <h3 class="text-light">load all the names of show you added till now</h3>
            <Button variant="secondary" onclick={handleGetCollections}>click to check</Button>
            {error() == null ? null : <p class="text-warning">{error()}</p>}
            <div class="m-3 p-2 " style={{ height: "220px" }}>
                {collectionNames() != null ? (
                    <>
                        <div class="w-50  overflow-scroll m-2" style={{ height: "200px" }} >
                            <For each={collectionNames()}>
                                {/* TODO: set type declarations */}
                                {(name: any, i) =>
                                    <ListGroup>
                                        <ListGroup.Item>{name.name}</ListGroup.Item>
                                    </ListGroup>
                                }
                            </For>
                        </div>
                    </>
                ) : null}
            </div>
        </div>

    </div>;
};
