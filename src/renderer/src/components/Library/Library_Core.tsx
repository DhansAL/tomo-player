import { LibraryStore } from '@renderer/stores/LibraryStore'
import { Show } from 'solid-js'
import { EpisodeList } from './EpisodeList'
import { ShowList } from './ShowList'

export const Library_Core = () => {
    const [store, _] = LibraryStore
    return (
        <div class="flex flex-col w-full h-screen lg:flex-row">
            <div class="grid flex-grow max-h w-2/3 card">
                <div class="overflow-y-auto bg-base-100 p-2"  >
                    {/* heading */}
                    <div class=" flex my-4 p-2">
                        <Show when={store.visibleLibraryComponent === "episodeList"}
                            fallback={
                                <p class="text-5xl font-bold">Collections</p>
                            }
                        >
                            <p class="text-5xl inline-flex items-end gap-3 font-bold">Collections
                                <span class="text-2xl inline-flex opacity-50 ">/some show </span></p>
                        </Show>
                    </div>

                    {/* list components */}
                    <Show when={store.visibleLibraryComponent === "showList"}
                        fallback={<EpisodeList />}
                    >
                        <ShowList />
                    </Show>
                </div>

            </div>

            {/* ---------------------- */}
            <div class="divider divider-horizontal m-0 "></div>
            <div class="grid flex-grow max-h w-1/3 card bg-base-100  place-items-center">content</div>
        </div>

    )
}
