/**
 * @file styles.tsx
 * @brief Hero section styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

import styled from "styled-components"

/**
 * @brief
 * Hero section container
 */
export const HeroContainer = styled.div`
  .hero {
    height: 110vh;
    min-height: 1000px;
    top: 50px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    z-index: 1;

    span {
      display: inline-block;
      width: 100%;
    }

    .hero__name {
      font-family: "Montserrat";
      font-weght: 900;
      font-size: 7rem;
      color: var(--tiffany-blue);
    }
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 2px solid #fff;
  }

  .hero__info {
    margin-top: 2rem;
    position: relative;
  }

  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    top: 60%;
    bottom: 20px;
    width: 50px;
  }

  .hero__social {
    left: 50px;
  }

  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;

    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;

        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }

    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }

    .hero__img {
      height: 300px;
    }

    .hero__info {
      margin-top: 3rem;
    }

    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;

      .hero__social__indicator {
        width: 20px;

        p {
          font-size: 1.2rem;
        }

        img {
          max-height: 22px;
          width: 10px;
        }
      }

      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;

      p {
        font-size: 1.3rem;
      }
    }
  }
`
