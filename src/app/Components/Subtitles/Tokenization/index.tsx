import { createEffect, createSignal } from "solid-js";

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

    return (
        <div>
            tokenizing -   {segmentedSub()}
        </div>
    )
}
