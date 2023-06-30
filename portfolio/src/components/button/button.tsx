/**
 * @file button.tsx
 * @brief Button component
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */
import { Link } from "react-router-dom"

// Styles
import { ButtonContainer } from "./styles"

/**
 * @brief
 * Button component
 * @param text Text of the button
 * @param link Link of the button
 * @param outline Outline of the button (boolean)
 * @returns Button component
 */
const Button = ({
  text,
  link,
  outline = false,
}: {
  text: string
  link: string
  outline?: boolean
}) => {
  return (
    <ButtonContainer outline={outline}>
      <Link to={link} className="button">
        {text}
      </Link>
    </ButtonContainer>
  )
}

export default Button
