import { Badge, Col, Container, Row } from "solid-bootstrap";
import { PlayerVideo } from "../../PlayerVideo";
import { Online } from "./Online";
import { Streak } from "./Streak";

export const StatusView = () => {
    return (
        <Container   >
            <div class="d-flex flex-row  justify-content-between m-4 p-2 " style={{ background: "#292d3a" }}>
                <div class="m-3" >
                    <h5 class="text-light">Continue watching</h5>
                    <Badge bg="info">kanojo okarishimasu ▶</Badge>

                </div>
                <div class="d-flex flex-column  ">
                    <Streak />
                    <Online />
                </div>
            </div>
            <div>
            </div>
        </Container >
    )
};
