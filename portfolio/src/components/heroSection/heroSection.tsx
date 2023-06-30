/**
 * @file heroSection.tsx
 * @brief This file contains the HeroSection component.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */
// Components
import PText from "../PText/ptext"

// Styles
import { HeroContainer } from "./styles"

// Assets
import { SocialData } from "../../assets/data/socialLinks"
import heroImg from "../../assets/images/hero.jpg"
import SocialMediaArrow from "../../assets/images/social-media-arrow.svg"

/**
 * @brief
 * This component contains the HeroSection component.
 * @returns The HeroSection component.
 */
const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span> Hi, I'm </span>
            <span className="hero__name">Carlos Salguero</span>
          </h1>

          {/* Hero image */}
          <div className="hero__img">
            <img
              src={heroImg}
              alt="A picture of me playing the piano at a concert"
            />
          </div>

          {/* Description */}
          <div className="hero__info">
            <PText className="hero__info_p">
              A CS Student at Tec de Monterrey.
            </PText>
          </div>

          {/* Social Media Icons */}
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="Social media arrow" />
            </div>

            {/*  */}
            <div className="hero__social__text">
              <ul>
                {SocialData.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ScrollDown */}
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={SocialMediaArrow} alt="Social media arrow" />
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}

export default HeroSection
