/**
 * @file index.tsx
 * @brief Entry point of the website.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */
// React
import ReactDOM from "react-dom/client"
import { HashRouter as Router } from "react-router-dom"

// Polyfills
import "stream-browserify"
import "crypto-browserify"
import "os-browserify/browser"
import "browserify-zlib"
import "buffer"
import "stream"

// Components
import App from "./App"

// Theme
import GlobalStyles from "./styles/globalStyles"
import Typography from "./styles/typography"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

/**
 * @brief
 * Renders the main component of the website
 */
root.render(
  <>
    <Router>
      <GlobalStyles />
      <Typography />
      <App />
    </Router>
  </>
)
