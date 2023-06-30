import styled from "styled-components"

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 0;
  background-color: var(--dark-light);

  ul {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: all 0.3s background-color ease-in-out;

      &:hover {
        background-color: var(--black-olive);
        color: var(--tiffany-blue);
      }
    }

    a {
      display: inline-block;
      padding: 1rem 2rem;
      color: var(--gray);
      font-size: 2rem;
      font-family: "Roboto Mono", monospace;
      outline: none;
    }

    .active {
      color: var(--tiffany-blue);
    }
  }

  .mobile-menu-icon {
    posation: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;

    * {
      pointer-events: none;
    }
  }

  .navItems .closeNavIcon {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0;

    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }

    .mobile-menu-icon {
      display: block;
    }

    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--dark-light);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;

        * {
          pointer-events: none;
        }
      }

      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`
