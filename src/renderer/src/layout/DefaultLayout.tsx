import { Footer } from "@renderer/components/common/Footer";
import type { Component, JSX } from "solid-js";
import { Navbar } from "../components/common/Navbar";

export const DefaultLayout: Component<{ children?: JSX.Element }> = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}
