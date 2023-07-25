/**
 * @file styles.tsx
 * @brief About Section Styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-09-30
 *
 * @copyright Copyright (c) - MIT License
 */

import styled from "styled-components"

export const AboutSectionContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .aboutSection__left {
    text-align: justify;
  }

  .aboutSection__right {
    padding-left: 4rem;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
  }

  .about__image {
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;

    .aboutSection__left,
    .aboutSection__right {
      text-align: center;
    }

    .aboutSection__right {
      padding-left: 0;
      margin-top: 2rem;
    }

    .about__image {
      width: 100%;
    }

    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
    }
  }

  @media screen and (max-width: 500px) {
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
    }
  }
`
