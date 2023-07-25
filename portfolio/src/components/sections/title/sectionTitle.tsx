/**
 * @file sectionTitle.tsx
 * @brief Section title component with a title and a subtitle
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-30
 *
 * @copyright Copyright (c) - MIT License
 */

// Styles
import { SectionTitleContainer } from "./styles"

/**
 * @brief
 * Section title component with a title and a subtitle
 * @param title Title of the section
 * @param subtitle Subtitle of the section
 * @returns Section title component
 */
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <SectionTitleContainer>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </SectionTitleContainer>
  )
}

export default SectionTitle
