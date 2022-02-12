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

    const [seePopover, setSeePopover] = createSignal(false)
    const [word, setWord] = createSignal(null)
    const segmenter = new TinySegmenter();

    createEffect(() => {
        props.toTokenize;
        let segmentedSub = segmenter.segment(props.toTokenize);
        setSegmentedSub(segmentedSub);
    })

    //on hover things
    const [select, setselect] = createSignal(null) //for token hilighting
    const handleTokenStyle = (token: string) => {
        setselect(token)
        setWord(token)
        setSeePopover(true);
    }
    return (
        <div class="col px-md-5 d-flex pd-3 flex-row text-light justify-content-center" style=" background: rgba(0, 0, 0, 0.4)">
            <div class="popover__wrapper">
                {/* FIXME: make it open and close on clicks to avoid unwanted requests and not missing search */}
                <div class="popover__content overflow-scroll scrollbar-primary bg-dark" style={{ height: "230px", width: "270px", bottom: "18px", left: "auto" }}>
                    {seePopover() ? <JishoPopover word={word()} /> : null}
                </div>
                <div class='d-flex'>
                    <For each={segmentedSub()} fallback={<div>starting </div>}>
                        {(token, i) =>
                            <>
                                <h4 onMouseOver={() => handleTokenStyle(token)}
                                    style={token == select() ? { cursor: "pointer", color: "#51f366" } : { color: "white", cursor: "pointer" }} >{token}</h4>

                            </>
                        }
                    </For>
                </div>
            </div>

        </div>
    )
}

