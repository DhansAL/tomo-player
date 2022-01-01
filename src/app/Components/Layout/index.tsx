import { Link } from "solid-app-router"
import { Header } from "../Header"

export const Layout = ()=>{
    return (
        <>
        <Header/>
        <Link  href="/">
        Overview  
        </Link>
      <Link  href="/library">
        library
      </Link>
      <Link  href="/settings">
        settings
      </Link>
        </>
    )
}