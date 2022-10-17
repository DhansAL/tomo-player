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
/**
 * at the time of commit, even after unwraping the store obj (initialplayervalue), it dosen't sets the store to its initial value after
 * setting it on a cleanup function, maintaining seperate objects for that. add keys to whatever you add down on initial values of store
 */
export const initialPlayerValue = {
    masterVolume: 30,
    muted: false,
    paused: true,
    currentTime: 0,
    playbackRate: 1,
    showVerboseInfoAtPause: true,
    showPlayerBaseControls: true
}


export const PlayerStore = createStore<Partial<PlayerStore>>({
    masterVolume: 30,
    muted: false,
    paused: true,
    currentTime: 0,
    playbackRate: 1,
    showVerboseInfoAtPause: true,
    showPlayerBaseControls: true
});
