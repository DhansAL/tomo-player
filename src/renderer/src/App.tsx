import type { Component } from 'solid-js'
// import { ThemeSwitcher } from './components/common/themeSwitcher'
import { Routes, Route } from "@solidjs/router"
import { Home } from './pages/Home'
const App: Component = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/library" element={<Library />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/player" element={<Player />} />
        <Route path="/pro" element={<ProPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userstats" element={<UserMain />} /> */}
      </Routes>
      {/* <ThemeSwitcher />
      <button class="btn btn-primary m-6">Button</button> */}
    </>
  )
}

export default App
