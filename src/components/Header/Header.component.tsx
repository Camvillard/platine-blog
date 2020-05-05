import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Logo } from "../Logo/Logo.component"
import {
  HeaderWrapper,
  LightHeaderWrapper,
  MobileNavWrapper,
  MobileNavLink,
  ToggleMenu,
  MobileSubNavLink,
  BgCirclePink,
  MobileNavBackground,
  BgCircleYellow,
} from "./Header.ui"
import { themeBreakpoints } from "../../theme/theme"
import { MiniLogo } from "../Logo/MiniLogo.component"
import { FacebookIcon } from "../Icons/SocialMedia.component"

const { smScreen, mdScreen, lgScreen } = themeBreakpoints

const LargeHeader = () => {
  return (
    <header>
      test arge
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    </header>
  )
}

const LightHeader = () => {
  const [menuIsOpen, toggleMenu] = useState(false)
  const [subMenuIsOpen, toggleSubMenu] = useState(false)

  return (
    <>
      {menuIsOpen && (
        <MobileNavBackground>
          <MobileNavWrapper>
            <MobileNavLink to={"/"}>contact</MobileNavLink>
            <MobileNavLink to={"/"}>à propos</MobileNavLink>
            <MobileNavLink to={"/"}>le jukebox</MobileNavLink>
            <MobileNavLink to={"/"}>la bibliothèque</MobileNavLink>
            <MobileNavLink
              to={"/"}
              onClick={() => toggleSubMenu(!subMenuIsOpen)}
            >
              etc
            </MobileNavLink>
            {subMenuIsOpen && (
              <>
                <MobileSubNavLink to={"/"}>podcasts</MobileSubNavLink>
                <MobileSubNavLink to={"/"}>théatre</MobileSubNavLink>
              </>
            )}
          </MobileNavWrapper>

          <BgCirclePink />
          <BgCircleYellow />
        </MobileNavBackground>
      )}
      <LightHeaderWrapper>
        <MiniLogo offsetTop={"-12px"} />
        <ToggleMenu onClick={() => toggleMenu(!menuIsOpen)}>
          {menuIsOpen ? "fermer" : "menu"}
        </ToggleMenu>
        <FacebookIcon />
        <FacebookIcon />
        <FacebookIcon />
      </LightHeaderWrapper>
    </>
  )
}

const Header = () => {
  const isTablet = useMediaQuery({ query: `(min-device-width: ${smScreen})` })
  const isLargeTablet = useMediaQuery({ query: `min-width: ${mdScreen}` })
  const isDesktop = useMediaQuery({ query: `min-width: ${lgScreen}` })
  return isTablet ? <LargeHeader /> : <LightHeader />
}
export default Header
