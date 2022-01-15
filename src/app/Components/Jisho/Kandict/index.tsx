//@ts-expect-error
import Kanji from "kanji.js"
import { createEffect } from "solid-js";
/**
 * 
 */
type KandictProps = {
    showKandict: () => void;
    kanji: string
}


export const Kandict = (props: KandictProps) => {
    createEffect(() => {
        props.kanji;
        console.log(Kanji.getDetails(props.kanji));
    });
    return (
        <>
            <button onclick={props.showKandict}>go back</button>
            <div>
                {props.kanji === null ? "something bad happened" : JSON.stringify(Kanji.getDetails(props.kanji))}
            </div>
        </>
    )
}
