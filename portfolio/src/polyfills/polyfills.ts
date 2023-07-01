/**
 * @file polyfills.ts
 * @brief Polyfills for IE11 compatibility
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

import crypto from "crypto-browserify"
import stream from "stream-browserify"
import timers from "timers-browserify"

declare global {
  interface Window {
    crypto: typeof crypto
    stream: typeof stream
    timers: typeof timers
  }
}

window.crypto = crypto
window.stream = stream
window.timers = timers
