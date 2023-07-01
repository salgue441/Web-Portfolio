/**
 * @file custom.d.ts
 * @brief Custom typescript definitions for images and svg files
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

declare module "*.jpg" {
  const path: string
  export default path
}

declare module "*.png" {
  const path: string
  export default path
}

declare module "*.svg" {
  const path: string
  export default path
}

declare interface Project {
  projectID: number
  projectName: string
  projectDescription: string
  projectImage: string
  projectUrl: string
}

// Modules
declare module "crypto-browserify"
declare module "timers-browserify"
declare module "stream-browserify"
