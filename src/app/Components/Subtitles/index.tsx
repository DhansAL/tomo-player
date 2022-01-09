import { createEffect, createSignal, onMount } from "solid-js"

type subtitleProps ={
    playerRef : HTMLVideoElement;
    time :number
}
export const Subtitles = (props:subtitleProps) => {
    // dont destructure props cuz it causes rerender ? solid native ?
    const [time,setTime] = createSignal(props.time)

onMount(()=>{
    console.log(props.playerRef);
})
createEffect(()=>{
    setTime(props.time)
})

//Parsing
let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 1.srt"
const subdatafetch = async()=>{
    console.log("ready to fetch");
    //@ts-expect-error
    let subFileData = await window.api.sendSubFile("sendSubFile",subfile)
    console.log(subFileData);
}

    return (
        <>
        <div>
           current time to be consumed by subtitles {time()} 
        </div>
           <div>
               <button onclick={subdatafetch}>get data</button>
               subtitle - 
           </div>
           </>
    )
}
