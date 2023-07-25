/**
 * @file home.tsx
 * @brief Home page component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */
// Components
import HeroSection from "../components/sections/hero/heroSections"
import AboutSection from "../components/sections/about/aboutSection"
import ServicesSection from "../components/sections/services/serviceSection"
import ProjectSection from "../components/sections/project/projectSection"

/**
 * @brief
 * Home page component with all the sections of the page (Hero, About, Projects, Contact, Footer) and the page styles
 * @returns Home page component
 */
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
    </>
  )
}

export default Home
