/**
 * @file styles.tsx
 * @brief Button Styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-09-30
 *
 * @copyright Copyright (c) - MIT License
 */

import styled from "styled-components"

interface ButtonContainerProps {
  outline?: boolean
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  margin-top: 2rem;

  .button {
    font-size: 2.2rem;
    padding: 0.7em 2em;
    border: 2px solid var(--ash-gray);
    border-radius: 8px;
    display: inline-block;
    font-family: "Roboto Mono", monospace;

    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--tiffany-blue)"};
    color: ${(props) => (props.outline ? "var(--tiffany-blue)" : "black")};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`
