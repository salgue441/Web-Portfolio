/**
 * @file typography.tsx
 * @brief This file contains the typography theme for the website.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

import { createGlobalStyle } from "styled-components"

/**
 * @brief
 * Constant that contains the typography
 * theme for the website.
 */
const Typography = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

    *, *::before, *::after {
        font-family: "Roboto Mono", monospace;
        color: var(--gray);
    }

    html {
        font-family: "Roboto Mono", monospace;
        color: var(--gray);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
    }
`

export default Typography
