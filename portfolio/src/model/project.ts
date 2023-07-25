/**
 * @file project.tsx
 * @brief Project model for the database and the application
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-07-35
 *
 * @copyright Copyright (c) - MIT License
 *
 */

/**
 * @class Project
 * @brief Class for the model of the project
 * @details This class is used for the model of the project
 */
class Project {
  projectID: number
  projectName: string
  projectDescription?: string | null
  projectLink?: string
  projectImage?: string | null

  /**
   * @brief
   * Constructor of the class Project
   * @param projectID Unique identifier (auto increment from db)
   * @param projectName Name of the project
   * @param projectDescription Description of the project
   * @param projectLink Link to the repository of the project
   * @param projectImage Link to the image of the project
   */
  constructor(
    projectID: number,
    projectName: string,
    projectDescription?: string | null,
    projectLink?: string,
    projectImage?: string | null
  ) {
    this.projectID = projectID
    this.projectName = projectName
    this.projectDescription = projectDescription || null
    this.projectLink = projectLink
    this.projectImage = projectImage || null
  }
}

export default Project
