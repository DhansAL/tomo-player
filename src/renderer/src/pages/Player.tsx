// import { PlayerStore } from "@renderer/stores/PlayerStore"
// import { unproxy } from "@renderer/utils/unProxy";
import { Controls } from "@renderer/components/Player/Controls";
import { PlayerStore } from "@renderer/stores/PlayerStore";
import screenfull from "screenfull";


import { AiFillAlert } from 'solid-icons/ai'
import { createEffect, onMount } from "solid-js";
/**
 * @description core player of the app. handles everything you need
 * 
 */
export const Player_Core = () => {
    let playerRef: HTMLVideoElement;
    let playerContainerRef: HTMLDivElement | undefined = undefined;

    const toggleFullscreen = async () => {

        await screenfull.toggle(playerContainerRef)
    }
    onMount(() => {
        toggleFullscreen()
    })

    //ref - works like this in solid

    const [store, setStore] = PlayerStore;
    const handleAddItem = () => {
        // setStore({ items: [...store.items, "hello deer"] })
        console.log("")
    }


    return (
        <>
            <div class=" w-full h-screen flex justify-center items-center" ref={playerContainerRef}>
                <video src="asset://D:/minami/passds.mp4" class="min-h-screen w-full p-0 bg-base-100 " />
                <Controls playerStore={store} playerStoreSetter={setStore} />
            </div>



        </>
    )
}
