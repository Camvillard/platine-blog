import styled from "styled-components"
import { Link } from "gatsby"
import { themeColors, themeFonts } from "../../theme/theme"

const {
  aqua,
  darkAqua,
  brightBlue,
  brightYellow,
  lightPink,
  lightGray,
  gray,
  mediumGray,
  darkGray,
} = themeColors

const { body, headers, accent } = themeFonts

export const SimpleLink = styled(Link)`
  font-family: ${accent};
  border-bottom: 2px solid ${darkGray};
  text-transform: uppercase;
  color: ${darkGray};
  font-size: 1.8rem;
  font-weight: 800;
`
