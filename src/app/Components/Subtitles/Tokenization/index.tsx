import { createEffect, createSignal, For } from "solid-js";
import { Button, OverlayTrigger, Popover } from "solid-bootstrap";
import { JishoPopover } from "../../Jisho";
import "../../../scrollbar.css"
import "./popover.css"

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
                        <div>

                            <div class="popover__wrapper">
                                <h4 class="popover__title" onMouseOver={() => handleTokenStyle(token)}
                                    style={token == select() ? { cursor: "pointer", color: "#51f366" } : { color: "white", cursor: "pointer" }} >{token}</h4>
                                <div class="popover__content overflow-scroll scrollbar-primary bg-dark" style={{ height: "230px", width: "270px", bottom: "14px" }}>
                                    <JishoPopover word={token} />
                                </div>
                            </div>

                        </div>

                    </>
                }
            </For>
        </div>
    )
}

