import type { Component } from 'solid-js'
// import { ThemeSwitcher } from './components/common/themeSwitcher'
import { Routes, Route } from "@solidjs/router"
import { HomePage } from './pages/HomePage'
const App: Component = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </>
  )
}

export default App
