
export type WorkFrontMatter = {
    title: string
    publishDate: string
    date: string
    url: string
    imgSrc: string
    description: string
  }

 export type WorkPost = {
    frontMatter: WorkFrontMatter
    slug: string
  }

  export type WorkPostProps = {
    posts?: WorkPost[]
  }
