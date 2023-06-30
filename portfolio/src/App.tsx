/**
 * @file App.tsx
 * @brief This file contains the main component of the website.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

// Components
import HeroSection from "./components/heroSection/heroSection"

/**
 * @brief
 * This function is the main component of the website.
 * @returns The main component of the website.
 */
function App() {
  return (
    <div className="App">
      <HeroSection />
    </div>
  )
}

export default App
