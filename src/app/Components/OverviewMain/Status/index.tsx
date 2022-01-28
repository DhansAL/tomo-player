import { Col, Container, Row } from "solid-bootstrap";
import { Online } from "./Online";
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
                <Col><p class="text-light">hello</p></Col>

            </Row>
        </Container>
        {/* streak online status PRO */}
    </div>;
};
