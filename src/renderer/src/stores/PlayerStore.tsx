import { createStore } from 'solid-js/store';

type EpisodeCollection = {
    title: string;
    description?: string;
    duration: string;
}


interface PlayerStore {
    currentVideoPath: string;
    currentSubtitlePath: string;
    currentTime: string;
    playbackRate: number;
    masterVolume: number;
    muted: boolean;
    // ... add more here
    episodeCollection: EpisodeCollection[];


}


export const PlayerStore = createStore<Partial<PlayerStore>>({

})