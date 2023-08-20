import React from "react"
import { graphql } from "gatsby"
import Layout from '@/components/common/layout'
import Column from '@/components/common/Column'
import ColumnHeader from '@/components/common/columnHeader'

export default function BlogPage({ data }) {
  return (
    <Layout>
      <Column>
        <ColumnHeader 
          title="blog" 
          subtitle="Just a collection of my thoughts, notes, stories, and things to share..." 
        />
      </Column>
    </Layout>
  )
}