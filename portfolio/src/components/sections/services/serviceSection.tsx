/**
 * @file servicesSection.tsx
 * @brief Services section component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */
// Components
import SectionTitle from "../title/sectionTitle"
import ServiceItem from "../../items/service/serviceItem"

// Icons
import { MdCode, MdEngineering, MdDesktopWindows } from "react-icons/md"

// Styles
import { ServicesContainer } from "./style"

/**
 * @brief
 * Services section component
 */
const ServicesSection = () => {
  return (
    <ServicesContainer>
      <div className="container">
        <SectionTitle title="Services" subtitle="What I will do for you" />

        <div className="servicesItem__allItems">
          <ServiceItem
            icon={<MdCode />}
            title="Software Developer"
            desc="Experienced in developing software solutions using a diverse range of programming languages. Proficient in C++, Python, and C#, with a strong focus on creating efficient and robust computer programs."
          />

          <ServiceItem
            icon={<MdDesktopWindows />}
            title="Software Engineer"
            desc="Skilled in designing and developing software and hardware systems. Proficient in client management, network administration, and implementing IoT solutions. "
          />

          <ServiceItem
            icon={<MdEngineering />}
            title="Engineer"
            desc="Experienced in designing and modeling systems using CAD software. Knowledgeable in SolidWorks and AutoCAD. "
          />
        </div>
      </div>
    </ServicesContainer>
  )
}

export default ServicesSection
