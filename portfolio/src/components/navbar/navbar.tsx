/**
 * @file navbar.tsx
 * @brief This file contains the Navbar component.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */
import { useState } from "react"
import { NavLink } from "react-router-dom"

// Icons
import { MdClose, MdMenu } from "react-icons/md"

// Assets
import { SidebarData } from "../../assets/data/sidebarData"

// styles
import { NavContainer } from "./styles"

/**
 * @brief
 * This component contains the Navbar component.
 * @returns The Navbar component.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavContainer>
      {/* Mobile icons */}
      <div
        className="mobile-menu-icon"
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={toggle}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>

      <ul className={!isOpen ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={toggle}
          role="button"
          tabIndex={0}
          onKeyDown={toggle}
        >
          <MdClose />
        </div>

        {/* List Items  */}
        {SidebarData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={toggle}
                role="button"
                onKeyDown={toggle}
                tabIndex={0}
              >
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </NavContainer>
  )
}

export default Navbar
