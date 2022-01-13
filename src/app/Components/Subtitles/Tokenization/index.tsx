


import { createEffect, createSignal, For } from "solid-js";



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
    //tokenizer instance
    const segmenter = new TinySegmenter();
    createEffect(() => {
        props.toTokenize;
        let segmentedSub = segmenter.segment(props.toTokenize);
        setSegmentedSub(segmentedSub);
    })
    const handleModal = (token: string) => {
        console.log(token);

    }

    return (
        <div style={{ display: "flex", alignItems: "center", }}>
            <For each={segmentedSub()}>
                {(token, i) =>
                    <>
                        <span style={{
                            wordSpacing: "20px",
                            color: "green",
                            cursor: "pointer",
                        }} onMouseOver={() => handleModal(token)}>{token}</span>
                    </>
                }


            </For>
        </div>
    )
}

