/**
 * @file globalStyles.tsx
 * @brief This file contains the global styles for the website.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

import { createGlobalStyle } from "styled-components"

/**
 * @brief
 * Constant that contains the global styles
 * for the website.
 */
const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto Mono", monospace;
    }

    :root {
        --white: #ffffff;
        --black-olive: #3b413c;
        --ash-gray: #9db5b2;
        --light-cyan: #daf0ee;
        --tiffany-blue: #94d1be; 
    }

    html {
        background-color: var(--black-olive);
        color: var(--white);
    }

    body {
        font-size: 1.6rem;
        font-family: "Roboto Mono", monospace;
        background-color: var(--black-olive);
        color: var(--white);
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--white);

        &:hover {
            color: var(--tiffany-blue);
        }
    }

    img, svg {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    .container {
        max-width: 120rem;
        width: 90%;
        margin: 0 auto;
    }

    // Smooth Scroll
    [data-scrollbar] {
        height: 100vh;
        overflow: hidden;
        background-color: var(--black-olive);

        .scroll-content {
            background-color: var(--black-olive);
        }

        .scrollbar-track.scrollbar-track-y {
            z-index: 101;

            .scrollbar-thumb-y {
                background-color: var(--tiffany-blue);
            }
        }
    }
`

export default GlobalStyles
