import { LibraryStore } from '@renderer/stores/LibraryStore'
import { FaSolidStar } from 'solid-icons/fa'
export const ShowList = () => {
    const [store, setStore] = LibraryStore

    return (
        <table class="table w-full " >
            <thead>
                <tr>
                    <th>Show Name</th>
                    <th>Episodes</th>
                    <th>Date Added</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr class='' onclick={() => setStore({ visibleLibraryComponent: "episodeList" })}>
                    <td class='w-2/3'>
                        <div class="flex flex-col ">
                            <div class="font-bold">Steins Gate</div>
                            <div class="text-sm opacity-50">season 2</div>

                        </div>
                    </td>
                    <td class='w-1/3'>
                        23
                        <span class=" badge badge-success badge-sm ml-2 p-1"><FaSolidStar /></span>
                    </td>
                    <td class='w-1/3'>
                        <div class='flex flex-col '>
                            <p class='w-1/3'>22-10-22 </p>
                            <span class='text-sm opacity-50'>23:23 hrs</span>
                        </div>
                    </td>
                </tr>
                <tr class='' onclick={() => setStore({ visibleLibraryComponent: "episodeList" })}>
                    <td class='w-2/3'>
                        <div class="flex flex-col ">
                            <div class="font-bold">Steins Gate</div>
                            <div class="text-sm opacity-50">season 2</div>

                        </div>
                    </td>
                    <td class='w-1/3'>
                        23
                        <span class=" badge badge-success badge-sm ml-2 p-1"><FaSolidStar /></span>
                    </td>
                    <td class='w-1/3'>
                        <div class='flex flex-col '>
                            <p class='w-1/3'>22-10-22 </p>
                            <span class='text-sm opacity-50'>23:23 hrs</span>
                        </div>
                    </td>
                    {/* <td class='w-1/3 flex items-center '>
                <label class="swap swap-rotate">
                    <input type="checkbox" />
                    <div class="swap-on fill-current w-10 h-10">
                        <FaSolidChevronUp />
                    </div>
                    <div class="swap-off fill-current w-10 h-10">
                        <FaSolidChevronDown />
                    </div>

                </label>
            </td> */}

                </tr>
            </tbody>
        </table>
    )
}
