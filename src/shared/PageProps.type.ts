import { TSiteData } from "./Site.type"
import { TAllWordpressPost, TWordpressPost } from "./Wordpress.type"

export interface IPageProps {
  location: any
  navigate: any
  data: IData
  pageContext: any
  pageResources: any
  path: string
  pathContext: any
  uri: string
  children?: any
}

interface IData {
  site: TSiteData
  allWodpressPost?: TAllWordpressPost
  wordpressPost?: TWordpressPost
}
