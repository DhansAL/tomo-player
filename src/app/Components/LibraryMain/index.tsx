import { Col, Row } from "solid-bootstrap";
import { LibraryContextProvider } from "../../Contexts/LibraryContext";
import { Collections } from "./Collections";
import { MediaSubsList } from "./MediaSubsList";

/**
 * @description the main library component.
 * 
 * @fix 
 *  fails to rerender sibling components if librarystore is used.
 * when store is updated on collections, it doesn't diff on mediasublist for some reason.
   using context till then*/
export const LibraryMain = () => {
    return (
        <div
            class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}
        >
            <div class="m-5">
                <LibraryContextProvider>
                    <Row>
                        <Col xs={7} >
                            <Collections />
                        </Col>
                        <Col xs={5} >
                            <MediaSubsList />
                        </Col>
                        {/* <Col xs={3} >
                            <ShowDetails />
                        </Col> */}
                    </Row>
                </LibraryContextProvider>

            </div>

        </div>

    )
}