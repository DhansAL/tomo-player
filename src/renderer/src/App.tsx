import type { Component } from 'solid-js'
// import { ThemeSwitcher } from './components/common/themeSwitcher'
import { Routes, Route } from "@solidjs/router"
import { Home } from './pages/Home'
const App: Component = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
