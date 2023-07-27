/**
 * @file projectSection.tsx
 * @brief Project section component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */
import { useEffect, useState } from "react"

// Components
import ProjectItem from "../../items/project/projectItem"
import SectionTitle from "../title/sectionTitle"

// Swiper core and required modules
import SwiperCore from "swiper"
import Navigation from "swiper"

// Database
import { execute } from "../../../utils/db"

// Styles & Types
import { ProjectSectionContainer } from "./style"
import Project from "../../../model/project"

// install Swiper modules
SwiperCore.use([Navigation])

/**
 * @brief 
 * Project section component
 * @returns {JSX.Component} Project section component
 */
const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    /**
     * @brief 
     * Get all projects from database and set them to projects state
     */
    const getProjects = async () => {}
  }, [])

  return (
    <>
      <div>
        <SectionTitle title="Projects" subtitle="My recent works" />
      </div>
    </>
  )
}

export default ProjectSection
