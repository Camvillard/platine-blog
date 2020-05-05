import styled from "styled-components"
import { Link } from "gatsby"
import { themeFonts, themeColors } from "../../theme/theme"

const { body, accent } = themeFonts
const { darkGray, lightPink, brightBlue, brightYellow } = themeColors

export const HeaderWrapper = styled.header`
  width: 92vw;
  margin: 24px auto;
`

export const LightHeaderWrapper = styled.header`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 54px auto 32px 32px 32px;
  align-items: center;
  grid-gap: 0;
  padding: 0 4vw;
  border-top: 2px solid ${darkGray};
  background: white;
`

export const ToggleMenu = styled.h4`
  margin: 0;
  justify-self: center;
  font-size: 2.4rem;
`

export const MobileIconsWrapper = styled.div``

export const MobileNavBackground = styled.div`
  background: ${brightBlue};
  position: fixed;
  z-index: 990;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const MobileNavWrapper = styled.div`
  z-index: 998;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8vw;
`

export const MobileNavLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  font-family: ${accent};
  color: ${darkGray};
  font-size: 4.2rem;
  font-weight: 800;
`

export const MobileSubNavLink = styled(MobileNavLink)`
  font-size: 3rem;
  margin-left: 4vw;
`

export const BgCirclePink = styled.div`
  position: fixed;
  bottom: 0;
  z-index: -1;
  right: -64vw;
  border-radius: 50%;
  background: ${lightPink};
  width: 126vw;
  height: 126vw;
`

export const BgCircleYellow = styled.div`
  position: fixed;
  z-index: -2;
  bottom: -12vh;
  left: -48vw;
  border-radius: 50%;
  background: ${brightYellow};
  width: 126vw;
  height: 126vw;
`
