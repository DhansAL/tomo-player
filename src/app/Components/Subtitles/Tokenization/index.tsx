import { createEffect, createSignal, For } from "solid-js";

const TinySegmenter = require("tiny-segmenter");

type TokenProps = {
    toTokenize: string[];
}
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

