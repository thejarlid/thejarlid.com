import React from "react"
import Column from '@/components/common/column'
// import WorkSection from "../components/worksection/worksection"
import Layout from '@/components/common/layout'
import ColumnHeader from '@/components/common/columnHeader'
import Head from 'next/head';

export default function WorkPage(/*{ data }*/) {
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