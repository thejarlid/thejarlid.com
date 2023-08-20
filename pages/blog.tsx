import React from "react"
import Layout from '@/components/common/layout'
import Column from '@/components/common/column'
import ColumnHeader from '@/components/common/columnHeader'

export default function BlogPage() {
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