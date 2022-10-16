import { createStore } from 'solid-js/store';

type EpisodeCollection = {
    title: string;
    description?: string;
    duration: string;
}


export interface PlayerStore {
    currentVideoPath: string;
    currentSubtitlePath: string;
    currentTime: number;
    playbackRate: number;
    masterVolume: number;
    muted: boolean;
    duration: number;
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
    currentTime: 0,
    showVerboseInfoAtPause: true,
    showPlayerBaseControls: true
})