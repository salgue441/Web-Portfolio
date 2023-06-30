/**
 * @file style.ts
 * @brief Services section component style.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

import styled from "styled-components"

export const ServicesContainer = styled.div`
  padding: 10rem 0;

  .servicesItem__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .servicesItem__allItems {
      flex-direction: column;
      gap: 5rem;
      max-width: 100%;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`
