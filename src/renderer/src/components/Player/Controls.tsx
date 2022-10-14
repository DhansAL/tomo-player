import { FaSolidChevronLeft, FaSolidChevronRight, FaSolidPlay, FaSolidVolumeHigh } from 'solid-icons/fa'
import { FaSolidBookOpen } from 'solid-icons/fa'
import { TbLetterCase } from 'solid-icons/tb'
import { BsCollectionPlayFill } from 'solid-icons/bs'
import { FaSolidForwardFast } from 'solid-icons/fa'
export const Controls = () => {
    return (
        <div class="absolute p-5 w-full h-screen flex gap-10  flex-col   z-10">
            <div class="flex flex-row basis-1/6 justify-between border">
                <p class="text-info">top part</p>
            </div>
            <div class="flex flex-row basis-5/6 justify-between border">
                <p class="text-info">middle part</p>
            </div>
            <div class="flex flex-row basis-1/6 justify-between border">
                <p class="text-info">sub part</p>
            </div>
            <div class="flex flex-col basis-1/6 justify-between items-start p-2 pt-5">
                {/* Progress */}
                <div class=" flex flex-row items-center  gap-3 w-full">
                    <p class="text-white text-xs">00:00</p>
                    <input type="range" min="0" max="100" value="40" class="border range range-xs range-primary " />
                    <p class="text-white text-xs">23:23</p>
                </div>
                {/* controlls */}
                <div class=" flex flex-row items-center justify-between w-full">
                    {/* left side controlls */}
                    <div class="flex flex-row items-center gap-4">
                        <FaSolidPlay size={26} />
                        <FaSolidChevronLeft size={26} />
                        <FaSolidChevronRight size={26} />
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
                        <div data-tip="Playback rate" class="tooltip dropdown dropdown-top dropdown-end">
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
            </div>
        </div>
    )
}
