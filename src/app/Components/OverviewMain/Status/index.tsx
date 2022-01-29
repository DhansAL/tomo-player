import { Container } from "solid-bootstrap";
import { ContinuePlay } from "./ContinuePlay";
import { Online } from "./Online";
import { Streak } from "./Streak";

export const StatusView = () => {

    return (
        <Container   >
            <div class="d-flex flex-row  justify-content-between m-4 p-2 " style={{ background: "#292d3a" }}>
                <ContinuePlay />
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
