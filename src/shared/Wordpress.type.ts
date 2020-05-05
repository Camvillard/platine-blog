export type TAllWordpressPost = {
  edges: TWordpressPostNode[]
}

export type TWordpressPostNode = {
  node: TWordpressPost
}

export type TWordpressPost = {
  id: string
  slug: string
  title: string
  categories: TCategory[]
  date: string
  excerpt: string
  featured_media: TFeaturedMedia
  content?: string
}

export type TCategory = {
  id: string
  name: string
  slug: string
}
export type TFeaturedMedia = {
  source_url: string
  alt_text?: string
}
