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
import ProjectItem from "../projectItem/projectItem"
import SectionTitle from "../sectionTitle/sectionTitle"

// Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/swiper-bundle.min.css"

// Database
import { execute } from "../../services/db"

// Styles
import { ProjectSectionContainer } from "./style"

SwiperCore.use([Navigation])

// Interfaces
/**
 * @brief
 * Project section component
 * @return {JSX.Element} Project section component
 */
const ProjectSection = () => {
  const [projectData, setProjectData] = useState<Project[]>([])

  useEffect(() => {
    /**
     * @brief
     * Gets the last 5 projects based off date created from the database.
     * Sets the project data to the state.
     * @return {void} No return
     */
    const getProjects = async () => {
      const projects = await execute<Project[]>(
        "select * from projects order by projectDate desc limit 5"
      )

      setProjectData(projectData)
    }

    getProjects()
  }, [])

  return (
    <ProjectSectionContainer id="projects">
      <div className="container">
        <SectionTitle title="Projects" subtitle="My recent work" />

        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.projectID}>
                <ProjectItem
                  title={project.projectName}
                  img={project.projectImage}
                  desc={project.projectDescription}
                  link={project.projectLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ProjectSectionContainer>
  )
}

export default ProjectSection
