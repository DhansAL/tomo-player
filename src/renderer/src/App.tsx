import type { Component } from 'solid-js'
import { ThemeSwitcher } from './components/common/themeSwitcher'

const App: Component = () => {

  return (
    <>
      <ThemeSwitcher />
      <button class="btn btn-primary m-6">Button</button>

    </>
  )
}

export default App
