import { createEffect, createSignal, onMount } from "solid-js"

type subtitleProps ={
    playerRef : HTMLVideoElement;
    time :number
}
export const Subtitles = (props:subtitleProps) => {
    // dont destructure props cuz it causes rerender  - solid issue
    const [time,setTime] = createSignal(props.time)

onMount(()=>{
    console.log(props.playerRef);
})
createEffect(()=>{
    setTime(props.time)
})

//Parsing
let subfile = "E:\\voracious animes\\kanojo okarishimasu\\rent 2.ass"
const subdatafetch = async()=>{
    //@ts-expect-error
    let subFileBlob = await window.api.sendSubFile("sendSubFile",subfile);
    console.log(subFileBlob);
    
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
