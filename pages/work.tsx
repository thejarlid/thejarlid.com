import React from "react"
import Column from '@/components/common/column'
import WorkSection from '@/components/work/worksection'
import Layout from '@/components/common/layout'
import ColumnHeader from '@/components/common/columnHeader'
import Head from 'next/head';
import { WORK_DIR, getFrontMatterForAllPostsInDir } from '@/src/utils'

type WorkFrontMatter = {
  title: string
  publishDate: string
  date: string
  url: string
  imgSrc: string
  description: string
}

type WorkPost = {
  frontMatter: WorkFrontMatter
  slug: string
}

export type WorkPostProps = {
  posts?: WorkPost[]
}

export default function WorkPage({ posts }: WorkPostProps) {
  posts?.forEach((post) => {
    console.log(post.frontMatter)
  });
  return (
      <>
        <Head>
          <title>Dilraj Devgun - Work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Column>
              <ColumnHeader
              title="work"
              subtitle="Some of my favourite projects and past experience that I want to highlight."
              />
              {!posts && <div>No Work Items</div>}
              {posts &&
               posts
                .sort((a: WorkPost, b: WorkPost) => {
                  console.log(a.frontMatter.publishDate)
                  return new Date(b.frontMatter.publishDate).getTime() - new Date(a.frontMatter.publishDate).getTime()
                })
                .map((post) => {
                  return (
                    // WorkSection(post.frontMatter)
                    <p key={post.slug}>{post.frontMatter.title}</p>
                  )
                })
              }
          </Column>
        </Layout>
      </>
    )
}

export async function getStaticProps() {
  const allWorkData = await getFrontMatterForAllPostsInDir(WORK_DIR)
  return {
    props: {
      posts: allWorkData,
    },
  };
}
