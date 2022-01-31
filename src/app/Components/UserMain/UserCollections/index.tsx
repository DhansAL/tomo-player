import { Button, ListGroup } from "solid-bootstrap";
import { createSignal, For, onMount } from "solid-js";
import { getCollections } from "../../../apiEvents/collections/getcollections";

export const GetUserCollections = () => {
    const [collectionNames, setCollectionNames] = createSignal(null)

    const handleGetCollections = async () => {
        const namesArr = await getCollections()
        setCollectionNames(namesArr)
        console.log(collectionNames());
    }
    return <div>
        <div class=" m-4 p-2 d-flex flex-column " style={{ background: "#292d3a" }}>
            <h3 class="text-light">load all the names of show you added till now</h3>
            <Button variant="secondary" onclick={handleGetCollections}>click to check</Button>
            <div class="m-3 p-2">
                {collectionNames() != null ? (
                    <>
                        <For each={collectionNames()}>
                            {(name: any, i) =>
                                <ListGroup>
                                    <ListGroup.Item>{name.name}</ListGroup.Item>
                                </ListGroup>
                            }
                        </For>
                    </>
                ) : null}
            </div>
        </div>

    </div>;
};
