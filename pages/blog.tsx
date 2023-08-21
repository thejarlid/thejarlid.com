import React from "react"
import Layout from '@/components/common/layout'
import Column from '@/components/common/column'
import ColumnHeader from '@/components/common/columnHeader'
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Dilraj Devgun - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Column>
          <ColumnHeader 
            title="blog" 
            subtitle="Just a collection of my thoughts, notes, stories, and things to share..." 
          />
        </Column>
      </Layout>
    </>
  )
}