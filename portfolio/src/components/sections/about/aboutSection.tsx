/**
 * @file aboutSection.tsx
 * @brief About section component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

// Components
import PText from "../../PText/ptext"
import Button from "../../button/button"
import SectionTitle from "../title/sectionTitle"

// Image
import AboutImg from "../../../assets/images/about.jpg"

// Styles
import { AboutSectionContainer } from "./styles"

/**
 * @brief
 * About section component
 * @returns About section component
 */
const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subtitle="Let me introduce myself" title="About me" />

          <PText>
            I'm a Computer Science student at Tec de Monterrey, campus
            Querétaro. I'm a very passionate and curious person, always eager to
            explore, adventure, and try new things. I enjoy reading, listening
            to music, and learning about various topics. I thrive on challenges
            and constantly seek opportunities to expand my knowledge and skills.
          </PText>

          {/* Buttons */}
          <div className="aboutSection__buttons">
            <Button text="Works" link="/projects" />
            <Button text="Read More" link="/about" outline />
          </div>
        </div>

        {/* Image */}
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" className="about__image" />
        </div>
      </div>
    </AboutSectionContainer>
  )
}

export default AboutSection
