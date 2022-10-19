import { LibraryStore } from "@renderer/stores/LibraryStore"


export const EpisodeList = () => {
    const [_, setStore] = LibraryStore
    return (
        <table class="table w-full " >
            <thead>
                <tr>
                    <th>Episode No.</th>
                    <th>Name</th>
                    <th>Sub Available</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr class='' onclick={() => setStore({ visibleLibraryComponent: "showList" })}>
                    <td class='w-1/4'>
                        <p class="font-bold">01.</p>
                    </td>
                    <td class='w-2/4' onclick={() => setStore({ visibleLibraryComponent: "showList" })}>
                        <p class="text-xl">First episode of steins gate</p>
                    </td>
                    <td class='w-1/4'>
                        <span class=" badge badge-success badge-sm ml-2 p-1">Yes</span>
                    </td>
                    <td class='w-1/4'>
                        <p class="text-sm opacity-50">24:25</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
