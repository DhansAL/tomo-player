import { Container } from "solid-bootstrap";
import { DragDropModal } from "../../FileManagement/DragDropModal";

export const AddOrPlay = () => {
    return (
        <Container>
            <div class=" m-4 p-2 " style={{ background: "#292d3a" }}>
                <div class="d-flex flex-row justify-content-around m-3">
                    <div className="d-flex flex-column ">
                        <h4 className="text-light">ADD A NEW SHOW TO YOUR COLLECTION</h4>
                        <span className="text-muted">Select the folder which contains subfiles and video files. </span>
                        <span className="text-info">they dont have to be arranged in order :) </span>
                    </div>
                    <DragDropModal isFile={false} />
                </div>
            </div>
            <div class=" m-4 p-2 " style={{ background: "#292d3a" }}>
                <div class="d-flex flex-row justify-content-around m-3">
                    <div className="d-flex flex-column ">
                        <h4 className="text-light">DROP AND PLAY VIDEO</h4>
                        <span className="text-muted">Drop the video and subfile of show to play</span>
                        <span className="text-info">subfile and video file should match</span>
                    </div>
                    <DragDropModal isFile={false} />
                </div>
            </div>
        </Container>
    )

};
