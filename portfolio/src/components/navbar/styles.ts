import styled from "styled-components"

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0.9rem 0;
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
      font-size: 1.5rem;
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
    height: 85px;
    background-color: var(--dark-light);

    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }

    .mobile-menu-icon {
      position: fixed;
      top: 2rem;
      left: 1.5rem;
      width: 4rem;
      cursor: pointer;
      z-index: 101;
      display: block;
      outline: none;

      * {
        pointer-events: none;
      }
    }

    .navItems {
      --top: 0rem;
      transition: all 0.3s ease-in-out;
      background-color: var(--black-olive);
      padding: 2rem;
      width: 100%;
      max-width: 100%;
      height: calc(100vh);
      position: absolute;

      top: var(--top);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`
