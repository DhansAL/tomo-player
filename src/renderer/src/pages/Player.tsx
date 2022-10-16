// import { PlayerStore } from "@renderer/stores/PlayerStore"
// import { unproxy } from "@renderer/utils/unProxy";
import { Controls } from "@renderer/components/Player/Controls";
import { PlayerStore } from "@renderer/stores/PlayerStore";
import screenfull from "screenfull";


import { onMount } from "solid-js";
/**
 * @description core player of the app. handles everything you need
 * 
 */
export const Player_Core = () => {
    let playerRef: HTMLVideoElement | undefined;
    let playerContainerRef: HTMLDivElement | undefined = undefined;

    //ref - works like this in solid

    const [store, setStore] = PlayerStore;
    const toggleFullscreen = async () => {
        await screenfull.toggle(playerContainerRef)
    }
    onMount(() => {
        toggleFullscreen()

    })




    return (
        <>
            <div class=" w-full h-screen flex justify-center items-center" ref={playerContainerRef}>
                <video
                    // onTimeUpdate={() => console.log(playerRef?.currentTime)}
                    src="asset://D:/minami/passds.mp4"
                    class="min-h-screen w-full p-0 bg-base-100 "
                    ref={playerRef}
                />
                <Controls playerStore={store} playerStoreSetter={setStore} playerRef={playerRef} />
            </div>



        </>
    )
}
