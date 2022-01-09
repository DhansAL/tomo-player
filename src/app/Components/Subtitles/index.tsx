import { createEffect, createSignal, onMount } from "solid-js"

type subtitleProps ={
    playerRef : HTMLVideoElement;
    time :number
}
export const Subtitles = (props:subtitleProps) => {
    const [pi,si] = createSignal(0)


onMount(()=>{
    console.log(props.playerRef);
    
})
createEffect(()=>{
    console.log("subtime update check via createEffect" , pi())

})

const handleClick =()=>{
    console.log(props.time)
    // dont destructure props cuz it causes rerender ? solid native ?
}
   
  
    return (
        <div>
            <button onclick={handleClick}> getTime</button>
           current time to be consumed by subtitles {pi()} 
        </div>
    )
}
