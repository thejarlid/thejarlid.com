import React from "react"
import Column from '@/components/common/column'
import WorkSection from '@/components/work/worksection'
import Layout from '@/components/common/layout'
import ColumnHeader from '@/components/common/columnHeader'
import Head from 'next/head';
import { WORK_DIR, getFrontMatterForAllPostsInDir } from '@/src/utils'
import { WorkPostProps, WorkPost } from "@/src/types"

export default function WorkPage({ posts }: WorkPostProps) {
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
                  return new Date(b.frontMatter.publishDate).getTime() - new Date(a.frontMatter.publishDate).getTime()
                })
                .map((post) => {
                  return (
                    <WorkSection {...post.frontMatter} key={post.slug} />
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
