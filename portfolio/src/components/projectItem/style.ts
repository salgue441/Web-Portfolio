/**
 * @file style.ts
 * @brief Project Item Styles
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

import styled from "styled-components"

export const ProjectItemContainer = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-1);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--dark-blue-2);
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem__title {
    font-size: 2.2rem;
  }

  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono-Regular";
    margin-top: 1rem;
  }

  .projectItem__Referral {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
  }

  .projectItem__Link {
    &:hover {
      color: var(--white);
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`
