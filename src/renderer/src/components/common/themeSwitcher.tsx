import { DAISY_THEMES } from '@renderer/constants/daisyThemes'
import type { Component } from 'solid-js'
import { onMount } from 'solid-js'
import { themeChange } from 'theme-change'

export const ThemeSwitcher: Component = () => {

    onMount(async () => {
        themeChange();
    })
    return (
        <>
            <select class="select select-bordered select-xs max-w-xs m-5" data-choose-theme>
                <option disabled selected>Pick your favorite theme</option>
                {DAISY_THEMES.map((value) => (
                    <option value={value.toLowerCase()}>{value}</option>
                ))}
            </select>
            <br />

        </>
    )
}

