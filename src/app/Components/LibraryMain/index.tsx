import { Col, Container, Row } from "solid-bootstrap";
import { Collections } from "./Collections";
import { MediaSubs } from "./MediaSubs";
import { PopToChoose } from "./PopToChoose";
import { ShowDetails } from "./ShowDetails";

export const LibraryMain = () => {
    return (
        <div
            class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}
        >
            <div>
                <PopToChoose />
            </div>
            <div style={{ margin: "5px", padding: "3px" }}>
                <Row>
                    <Col xs={4} >
                        <Collections />
                    </Col>
                    <Col xs={4} >
                        <MediaSubs />
                    </Col>
                    <Col xs={3} >
                        <ShowDetails />
                    </Col>
                </Row>
            </div>

        </div>

    )
}
