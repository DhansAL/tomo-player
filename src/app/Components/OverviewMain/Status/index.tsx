import { Col, Container, Row } from "solid-bootstrap";
import { Online } from "./Online";
import { Pro } from "./Pro";
import { Streak } from "./Streak";

export const StatusView = () => {
    return <div class="m-2">
        <Container >
            <Row>
                <Col >
                    <Streak />
                </Col>
                <Col>
                    <Online />
                </Col>
                <Col>
                    <Pro />
                </Col>

            </Row>
        </Container>
        {/* streak online status PRO */}
    </div>;
};
