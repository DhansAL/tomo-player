import { Col, Container, Row } from "solid-bootstrap";
import { Collections } from "./Collections";
import { MediaSubsList } from "./MediaSubsList";
import { ShowDetails } from "./ShowDetails";

export const LibraryMain = () => {
    return (
        <div
            class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}
        >
            {/* can have a context here to transfer data of selected files here */}
            <div style={{ margin: "5px", padding: "3px" }}>
                <Row>
                    <Col xs={4} >
                        <Collections />
                    </Col>
                    <Col xs={4} >
                        <MediaSubsList />
                    </Col>
                    <Col xs={3} >
                        <ShowDetails />
                    </Col>
                </Row>
            </div>

        </div>

    )
}
