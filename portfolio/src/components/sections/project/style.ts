/**
 * @file style.ts
 * @brief Project Section Styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */
import styled from "styled-components"

export const ProjectSectionContainer = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }

  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--dark-light);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--white);
    border-radius: 8px;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;

      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`
