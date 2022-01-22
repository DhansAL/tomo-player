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

    return (
        <div style={{ display: "flex", alignItems: "center", border: "solid 3px red" }}>

            <For each={segmentedSub()} fallback={<div>cant get this word</div>}>
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
                            <h4 >{token}</h4>
                        </OverlayTrigger>
                    </>
                }
            </For>
        </div>
    )
}

