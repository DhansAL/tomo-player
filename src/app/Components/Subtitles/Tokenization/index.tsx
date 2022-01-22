import { createEffect, createSignal, For } from "solid-js";
import { Button, OverlayTrigger, Popover } from "solid-bootstrap";
import { JishoPopover } from "../../Jisho";

const TinySegmenter = require("tiny-segmenter");

type TokenProps = {
    toTokenize: string[];
}

/**
 * Reusable component to tokenize (**JP) any sentence array or single word.
 * creates an hoverable modal to see the details of the word.
 *
 * @param toTokenize string[ ] | string the sentence or word to tokenize.
 */
export const Tokenization = (props: TokenProps) => {
    const [segmentedSub, setSegmentedSub] = createSignal([])
    const segmenter = new TinySegmenter();

    createEffect(() => {
        props.toTokenize;
        let segmentedSub = segmenter.segment(props.toTokenize);
        setSegmentedSub(segmentedSub);
    })

    //on hover style change
    const [select, setselect] = createSignal("")

    const handleTokenStyle = (token: string) => {
        setselect(token)
    }
    return (
        <div class="col px-md-5 d-flex pd-3 flex-row bg-dark text-light justify-content-center">
            <For each={segmentedSub()} fallback={<div>starting </div>}>
                {(token, i) =>
                    <>
                        <OverlayTrigger
                            trigger="click"
                            offset={[0, 8]}
                            placement="top"
                            overlay={
                                <Popover id="popover-basic">
                                    <Popover.Header as="h3"> {token}</Popover.Header>
                                    <Popover.Body style={{ overflow: "scroll", height: "230px", width: "280px" }}>
                                        <JishoPopover word={token} />
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <h4 onMouseOver={() => handleTokenStyle(token)} style={token == select() ? { cursor: "pointer", color: "#51f366" } : { color: "white", cursor: "pointer" }} >{token}</h4>
                        </OverlayTrigger>
                    </>
                }
            </For>
        </div>
    )
}

