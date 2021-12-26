import React from 'react'
import { DragDrop } from '../Components/DragDrop/DragDrop'
import Layout from '../Components/Layout/Layout'
import { LibraryAdd } from '../Components/LibraryAdd/LibraryAdd'

export const Library = () => {
    return (
        <>
            <Layout/>
            <DragDrop/>
            <LibraryAdd/>
            </>
    )
}
