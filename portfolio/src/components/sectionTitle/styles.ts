/**
 * @file styles.tsx
 * @brief Section Title Styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-09-30
 *
 * @copyright Copyright (c) - MIT License
 */

import styled from "styled-components"

export const SectionTitleContainer = styled.div`
  text-align: center;

  p {
    font-family: "Roboto Mono", monospace;
    font-size: 2rem;
  }

  h2 {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 900;
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color: var(--tiffany-blue);
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`
