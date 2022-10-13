import { Home } from '@renderer/components/Home/Home'
import type { Component } from 'solid-js'
import { DefaultLayout } from '../layout/DefaultLayout'

export const HomePage: Component = () => {
    return (
        <>
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        </>
    )
}
