/**
 * @file ptext.tsx
 * @brief PText component.
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

// Styles
import { PTextContainer } from "./styles"

/**
 * @brief
 * This component contains the PText component.
 * @param props The component props.
 * @returns The PText component.
 */
const PText = (props: any) => {
  return <PTextContainer {...props}>{props.children}</PTextContainer>
}

export default PText
