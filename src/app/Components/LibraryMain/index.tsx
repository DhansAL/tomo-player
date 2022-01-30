import { Col, Row } from "solid-bootstrap";
import { Collections } from "./Collections";
import { MediaSubsList } from "./MediaSubsList";

export const LibraryMain = () => {
    return (
        <div
            class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}
        >
            {/* can have a context here to transfer data of selected files here */}
            <div class="m-5">
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

            </div>

        </div>

    )
}
