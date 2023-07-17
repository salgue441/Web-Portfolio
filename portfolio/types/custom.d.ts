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

/**
 * @brief
 * Custom type for the project object
 * @interface Project
 * @property {number} projectID Project ID
 * @property {string} projectName Project name
 * @property {string | null} projectDescription Project description
 * @property {string | null} projectLink Project link
 * @property {string | null} projectImage Project image
 */
declare interface Project {
  projectID: number
  projectName: string
  projectDescription?: string | null
  projectLink?: string
  projectImage?: string | null
}
