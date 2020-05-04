import styled, { ThemeContext } from "styled-components"
import { themeFonts, themeColors } from "../../theme/theme"
import { SimpleLink } from "../Buttons/Button.ui"

type PostCardWrapper = {
  bgColor: string
}

export const PostCardWrapper = styled.div`
  padding: 18px 12px 12px 12px;
  margin-top: 72px;
  background: ${(props: PostCardWrapper) => props.bgColor};
`

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: -62px;
  margin-bottom: 6px;
`

export const PostIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props: PostCardWrapper) => props.bgColor};
`

export const PostMetaWrapper = styled.div`
  margin-left: 10px;
  margin-bottom: 4px;
`

export const PostMeta = styled.p`
  margin: 0;
  font-family: ${themeFonts.accent};
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.2;
  color: ${themeColors.darkGray};

  span {
    font-weight: 400;
  }
`

export const PostContentWrapper = styled.div`
  background: white;
  padding: 12px;
`

export const PostContent = styled.div``

export const PostThumbnail = styled.img``

export const PostTitle = styled.h3`
  margin-top: 0;
  line-height: 1;
  font-size: 2.4rem;
`

export const MoreButton = styled.div`
  text-align: right;
`
// ${props => props.theme}
