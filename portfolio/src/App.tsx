/**
 * @file App.tsx
 * @brief This file contains the main component of the website.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */
// React
import { Routes, Route } from "react-router-dom"

// Components
import Navbar from "./components/navbar/navbar"

// Views
import Home from "./pages/home"

/**
 * @brief
 * This function is the main component of the website.
 * @returns The main component of the website.
 */
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
