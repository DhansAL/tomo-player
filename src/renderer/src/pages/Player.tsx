// import { PlayerStore } from "@renderer/stores/PlayerStore"
// import { unproxy } from "@renderer/utils/unProxy";

import { AiFillAlert } from 'solid-icons/ai'
/**
 * @description core player of the app. handles everything you need
 * 
 */
export const Player_Core = () => {

    // const [store, setStore] = PlayerStore;
    const handleAddItem = () => {
        // setStore({ items: [...store.items, "hello deer"] })
        console.log("")
    }
    // console.log("dsds", store.items);

    return (
        // <video controls src="asset://D:/minami/passds.mp4" class="  min-h-screen w-full px-0 py-2 bg-base-100 "></video>
        <>

            <p class="m-5 text-3xl text-red-300">TESTING STORE</p>
            <AiFillAlert size={94} />
            <button onclick={handleAddItem} class="btn btn-info m-10">click me</button>
        </>
    )
}
