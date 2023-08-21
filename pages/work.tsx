import React from "react"
import Column from '@/components/common/column'
// import WorkSection from "../components/worksection/worksection"
import Layout from '@/components/common/layout'
import ColumnHeader from '@/components/common/columnHeader'
import Head from 'next/head';
import { WORK_DIR, getAllPostsInDirWithFrontMatter } from '@/src/utils'
import { WorkProps } from 'types'

export default function WorkPage({ allWorkData }: WorkProps) {
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
          </Column>
        </Layout>
      </>
    )
}

export async function getStaticProps() {
  const allWorkData = getAllPostsInDirWithFrontMatter(WORK_DIR)
  return {
    props: {
      allWorkData,
    },
  };
}