import { createStore } from 'solid-js/store';

type EpisodeCollection = {
    title: string;
    description?: string;
    duration: string;
}


export interface PlayerStore {
    currentVideoPath: string;
    currentSubtitlePath: string;
    currentTime: string;
    playbackRate: number;
    masterVolume: number;
    muted: boolean;
    // ... add more here
    showVerboseInfoAtPause: boolean;
    showPlayerBaseControls: boolean;
    episodeCollection: EpisodeCollection[];
    paused: boolean

}


export const PlayerStore = createStore<Partial<PlayerStore>>({
    masterVolume: 50,
    muted: false,
    paused: true,
    showVerboseInfoAtPause: true,
    showPlayerBaseControls: true
})