/**
 * @file serviceItem.tsx
 * @brief Services item component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

// Components
import PText from "../../PText/ptext"

// Default Icons
import { MdDesktopMac } from "react-icons/md"

// Styles
import { ItemContainer } from "./style"

/**
 * @brief
 * Services item component
 * @param icon Icon to show in the item
 * @param title Title of the item
 * @param desc Description of the item
 */
const ServiceItem = ({
  icon = <MdDesktopMac />,
  title = "Title",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
}: {
  icon?: JSX.Element
  title?: string
  desc?: string
}) => {
  return (
    <ItemContainer>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemContainer>
  )
}

export default ServiceItem
