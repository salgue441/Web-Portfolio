/**
 * @file style.ts
 * @brief Services item component styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */
import styled from "styled-components"

export const ItemContainer = styled.div`
  text-align: center;

  .servicesItem__icon {
    svg {
      width: 3rem;
      fill: var(--tiffany-blue);
    }
  }

  .servicesItem__title {
    color: var(--tiffany-blue);
    font-size: 2.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`
