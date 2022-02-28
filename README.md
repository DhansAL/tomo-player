# Tomoplayer
## !!! WIP, LINKS ARE TO BE UPDATED

Tomoplayer, a video player for learning Japanese with inbuilt dictionary and other
features which helps in efficient immersion while learning.

## Download Tomoplayer [beta](https://google.com) (for windows)

> Please note that thhis is a pre-release version which may have bugs. In case you found one please post the issue [here](https://google.com).

## Some key features

- works on all platforms (Windows, MacOS, Linux)
- No dictionary (JmDict,etc) required to install.
- variety of subtitle formats are supported ( ass,srt,vtt etc).
- detailed search for particular kanji in dictionary with **definitions and jlpt levels**.
- Practice listening by hiding the subtitles on the go.
- User specific monitoring in PRO section.
- Track your progress globally through (to be named) - a discord bot which will stay with you on your journey to learn Japanese ^\_^( **upcoming** )

## How to use Tomoplayer

#### Setting up media

Before using TomoPlayer,make sure you have your media file in **supported format**. Download the media and subtitle file and store them in a folder.

It is advised to have your downloaded media/show with videos and subtitles in one folder with same name (eg; ep1.mp4,ep1.srt). **Though you can match your files inside the player**.

#### Adding to collections

Once you have your files arranged, drop the file by clicking on add to collection found in **overview** section of the app. this will save your collection of files **locally**. Note that the app will never sync the local media by its own for privacy concerns, but user can select what can he store on our online database.

If you just want to play a video without adding it in your collection, you can do it by dropping the subtitle and video file on clicking **Drop to play**, which can be found in Overview section of the app.

#### Playing the show

You can see your locally added shows in **Library**. Click on your desired show and it will show all the subtitle and media files present in the specific show folder.
click the subtitle and media file and you're ready to play ^\_^

#### USER section - TODO.

## Development

#### tech stack

Tomoplayer is built with `Electron-Solid-Typescript` template which can be found [here](https://github.com/DhansAL/solidjs-electronForge-TS-template). This includes Hot Module Reloading (HMR) and all the Forge's perks. It also compiles typescript internally and bundles it via webpack. it is built as a single-page web app and then packaged as a cross-platform desktop app using Electron.

it uses `axios` to handle requests, and `solid-zustand` and native context api for app state management.
oher dependencies can be found in `package.json`.

#### File structure

After cloning the project, all the bulk of the code is in `src/` with some static resources in `public/`. The output of webpack will go into `build/`.
The main and preload scripts of electron can be found in `.src/electron`.
