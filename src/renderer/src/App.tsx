import type { Component } from 'solid-js'
// import { ThemeSwitcher } from './components/common/themeSwitcher'
import { Routes, Route } from "@solidjs/router"
import { HomePage } from './pages/HomePage'
import { Player_Core } from './pages/Player'
import { Library } from './pages/Library'
const App: Component = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player" element={<Player_Core />} />
        <Route path="/library" element={<Library />} />
      </Routes>

    </>
  )
}

export default App
