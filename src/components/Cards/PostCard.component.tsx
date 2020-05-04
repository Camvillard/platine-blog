import React from "react"
import {
  PostCardWrapper,
  PostIcon,
  PostHeader,
  PostMetaWrapper,
  PostMeta,
  PostContent,
  PostContentWrapper,
  PostTitle,
  PostThumbnail,
  MoreButton,
} from "./PostCard.ui"
import {
  setColorBackground,
  setIconBackground,
} from "../../helpers/cards.helpers"
import IconMusic from "../Icons/IconMusic.component"
import IconBook from "../Icons/IconBook.component"
import IconImages from "../Icons/IconImages.component"
import IconPodcast from "../Icons/IconPodcast.component"
import { SimpleLink } from "../Buttons/Button.ui"

export const setIcon = (category: string) => {
  console.log(category)

  switch (category) {
    case "jukebox":
      return <IconMusic width={28} color={"white"} />
    case "bibliotheque":
      return <IconBook width={28} color={"white"} />
    case "piecesdetheatre":
      return <IconImages />
    case "podcasts":
      return <IconPodcast />
    case "expos":
      return <IconImages />
    default:
      return <IconMusic width={28} color={"white"} />
  }
}

const PostCard = (props: any) => {
  console.log(props)
  const { post } = props

  const { categories, date, excerpt, title, slug } = post
  const category = categories[0]

  const bgColor = setColorBackground()
  const iconBgColors = setIconBackground(bgColor)
  return (
    <PostCardWrapper bgColor={bgColor}>
      <PostHeader>
        <PostIcon bgColor={iconBgColors}>{setIcon(category.slug)}</PostIcon>
        <PostMetaWrapper>
          <PostMeta>
            publié le : <span className="meta-content">{date}</span>
          </PostMeta>
          <PostMeta>
            dans : <span className="meta-content">{category.name}</span>
          </PostMeta>
        </PostMetaWrapper>
      </PostHeader>
      <PostContentWrapper>
        <PostTitle>
          <span
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </PostTitle>

        <PostThumbnail
          src="https://contenu.platineplatine.com/wp-content/uploads/2019/08/platine_placeholder_9.jpg"
          alt="book open and tea"
        />

        <PostContent>
          <span dangerouslySetInnerHTML={{ __html: excerpt }} />
        </PostContent>
        <MoreButton>
          <SimpleLink to={`/${slug}`}>lire la suite</SimpleLink>
        </MoreButton>
      </PostContentWrapper>
    </PostCardWrapper>
  )
}

export default PostCard
