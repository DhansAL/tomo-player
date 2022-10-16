import { PlayerStore } from '@renderer/stores/PlayerStore'
import { BsCollectionPlayFill } from 'solid-icons/bs'
import { FaSolidBookOpen, FaSolidChevronLeft, FaSolidChevronRight, FaSolidForwardFast, FaSolidPause, FaSolidPlay, FaSolidVolumeHigh } from 'solid-icons/fa'
import { TbLetterCase } from 'solid-icons/tb'
import { createEffect, onMount, Show } from 'solid-js'
import { SetStoreFunction } from 'solid-js/store/types/store'
// import * as datefns from 'date-fns'
import { formatSeconds } from '@renderer/utils/secondFormatter'

interface PlayerControlProps {
    playerStore: Partial<PlayerStore>;
    playerStoreSetter: SetStoreFunction<Partial<PlayerStore>>;
    playerRef: HTMLVideoElement | undefined;
}

export const Controls = (props: PlayerControlProps) => {
    const { playerStore, playerStoreSetter, playerRef } = props;

    // BASE CONTROLS
    const handleBaseControlVisiblity = async (visible: boolean) => {
        if (!visible) {
            await new Promise(resolve => setTimeout(resolve, 2500))
            playerStoreSetter({ showPlayerBaseControls: false })

        } else {
            playerStoreSetter({ showPlayerBaseControls: true })
        }
    }
    const handlePlayPause = async () => {
        playerStoreSetter({ showVerboseInfoAtPause: !playerStore.showVerboseInfoAtPause, paused: !playerStore.paused })
        if (playerStore.paused) {
            playerRef?.pause()
        }
        if (!playerStore.paused) {
            await playerRef?.play()
        }


    }

    // TIME RELATED
    const seekToTime = (time: number) => {
        playerRef!.currentTime = playerRef!.currentTime + time
    }
    const handleSmallForward = () => {
        seekToTime(10)
    }
    const handleSmallRewind = () => {
        seekToTime(-10)
    }

    // initializers
    playerRef!.ontimeupdate = () => {
        playerStoreSetter({ currentTime: playerRef?.currentTime })
        console.log(playerRef?.currentTime, "wakuwaku", playerRef?.duration);

    }
    playerRef!.onloadstart = () => {

        console.log("player Loading");
    }
    playerRef!.onloadedmetadata = () => {
        playerStoreSetter({ duration: playerRef?.duration })
    }



    const check = () => {
        const result = formatSeconds(playerRef!.currentTime, "HHMMSS")
        console.log("nigga got the value", result);

    }


    // AUDIO




    return (
        <div class="absolute p-3 w-full h-screen flex gap-3  flex-col " >
            <Show when={playerStore.showVerboseInfoAtPause}
                fallback={<div class="flex flex-row basis-1/6 justify-between " />
                }>
                <div class="flex flex-row basis-1/6 justify-between border">
                    <p class="text-info">top part</p>
                </div>
            </Show>
            {/* middle info only show when first load, else whenever user explicitly pauses(clicks on pause. not while checking words) */}
            <Show when={playerStore.showVerboseInfoAtPause}
                fallback={
                    <div class="flex flex-row basis-5/6 justify-between" />
                }>
                <div class="flex flex-row basis-5/6 justify-between border" >
                    <p class="text-info">middle part</p>
                </div>
            </Show>

            <div class="flex flex-row basis-1/6 justify-between border">
                <p class="text-info">sub part</p>
            </div>

            <div class=" flex flex-col basis-1/6 justify-between items-start p-3 pt-6" onMouseLeave={() => handleBaseControlVisiblity(false)} onMouseEnter={() => handleBaseControlVisiblity(true)}>
                <Show when={playerStore.showPlayerBaseControls}>
                    {/* Progress */}
                    <div class=" flex flex-row items-center  gap-3 w-full">
                        <Show when={playerStore.currentTime}
                            fallback={<p class="text-white text-xs">00:00</p>}
                        >
                            <p class="text-white text-xs">{formatSeconds(playerStore.currentTime!, "MMSS")}</p>
                        </Show>

                        <input
                            onchange={(e) => playerRef!.currentTime = parseInt(e.currentTarget.value) // value is a string
                            }
                            type="range" min="0" max={playerRef?.duration}
                            value={playerStore.currentTime}
                            class="border range range-xs range-primary " />

                        <Show when={playerStore.duration}>
                            <p class="text-white text-xs">{formatSeconds(playerStore.duration!, "MMSS")}</p>
                        </Show>

                    </div>
                    {/* controlls */}
                    <div class=" flex flex-row items-center justify-between w-full">
                        {/* left side controlls */}
                        <div class="flex flex-row items-center gap-4">
                            <Show when={playerStore.paused}
                                fallback={<FaSolidPause onclick={handlePlayPause} size={26} />}
                            >
                                <FaSolidPlay onclick={handlePlayPause} size={26} />
                            </Show>
                            <FaSolidChevronLeft onclick={handleSmallRewind} size={26} />
                            <FaSolidChevronRight onclick={handleSmallForward} size={26} />
                            {/* volume */}
                            <FaSolidVolumeHigh size={26} />
                            <input type="range" min="0" max="100" value="40" class="range range-xs w-32" />
                            <p class='text-white font-bold text-l ml-10'>Stein's Gate - season 2 </p>
                            <p class='text-white font-bold text-l ml-5'>episode - 7</p>
                        </div>
                        {/* right side controlls */}
                        <div class="flex flex-row items-center gap-5">
                            <FaSolidBookOpen size={26} />
                            <TbLetterCase size={26} />
                            <div class="dropdown dropdown-top dropdown-end">
                                <label tabindex="0" class="text-white m-1">1x</label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                                    <li><a>0.5x</a></li>
                                    <li><a>1x</a></li>
                                    <li><a>1.5x</a></li>
                                    <li><a>2x</a></li>
                                </ul>
                            </div>
                            <BsCollectionPlayFill size={26} />
                            <FaSolidForwardFast size={26} />
                        </div>
                    </div>
                </Show>
            </div>
        </div>
    )
}
