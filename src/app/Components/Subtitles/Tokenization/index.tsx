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

    /**
     //on hover things
  *  */
    const [select, setselect] = createSignal(null)
    //for token hilighting
    const handleTokenStyle = (token: string) => {
        setselect(token)
    }
    //calculate left via ref
    const handleShowPopover = (token: string) => {
        setWord(token)
        setSeePopover(true);
    }

    return (
        <div class="popover__wrapper"
            onmouseleave={() => setSeePopover(false)}
        >

            <div class="popover__content overflow-scroll scrollbar-primary bg-dark">

                {seePopover() ?
                    <JishoPopover word={word()} />
                    :
                    <div class="text-light d-flex flex-column p-3 justify-content-center align-items-center">
                        <h5 class="m-2 text-light">DICTIONARY</h5>
                        <p class="m-2 text-light">  click on any word to search</p>
                    </div>}
            </div>
            <div class='d-flex justify-content-center' style="width:100vw; background: rgba(0, 0, 0, 0.4)">
                <For each={segmentedSub()} fallback={<div>starting </div>}>
                    {(token, i) =>
                        <>
                            <h4
                                onMouseOver={() => handleTokenStyle(token)}
                                onclick={() => handleShowPopover(token)}
                                style={token == select()
                                    ? { cursor: "pointer", color: "#51f366" }
                                    : { color: "white", cursor: "pointer" }}
                            >
                                {token}
                            </h4>

                        </>
                    }
                </For>
            </div>
        </div>

    )
}

