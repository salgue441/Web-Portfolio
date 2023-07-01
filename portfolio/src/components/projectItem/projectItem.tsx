/**
 * @file projectItem.tsx
 * @brief Project item component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

import { Link } from "react-router-dom"

// Icons
import { FiGithub } from "react-icons/fi"

// Styles
import { ProjectItemContainer } from "./style"

/**
 * @brief
 * Project item component
 * @param img - Project image
 * @param title - Project title
 * @param desc - Project description
 * @param link - Project github link
 */
const ProjectItem = ({
  img,
  title = "Project Title",
  desc = "Project description",
  icon = <FiGithub />,
  link = "#",
}: {
  img: string
  title?: string
  desc?: string
  icon?: any
  link?: string
}) => {
  const openLink = () => {
    window.open(link, "_blank")
  }

  return (
    <ProjectItemContainer>
      <div className="projectItem__img">
        <img src={img} alt="project image" />
      </div>

      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>

        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__Referral">
          <Link onClick={openLink} to="#">
            <p className="projectItem__Link">See Project {icon}</p>
          </Link>
        </div>
      </div>
    </ProjectItemContainer>
  )
}

export default ProjectItem
