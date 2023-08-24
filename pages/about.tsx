import React from "react"
import Column from '@/components/common/column'
import ColumnHeader from '@/components/common/columnHeader'
import Layout from '@/components/common/layout'
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Dilraj Devgun - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Column>
          <ColumnHeader title="about" subtitle=""  />
          <p style={{marginBottom:"1.5rem"}}>
          I&apos;m a caffeine based lifeform ☕️ currently working as a software engineer at Meta Reality Labs on the Eye Tracking Computer Vision and ML Algorithms team.
          You can read about my prior experience at Instagram and Microsoft <a style={{fontWeight:"400"}} href="/dilraj-devgun-resume.pdf">here</a> . I fell in love with 
          Computer Science through designing and developing iOS apps with my best friend. What started as a creative hobby grew into a technical interest and career pursuit.
          In general I love learning (and teaching) new things and I use code as my medium to express my creativity.
          </p>
          <p style={{marginBottom:"1.5rem"}}>
          I'm currently working on an app called Meraki, tinkering with some microcontroller projects, and building a knowledge graph browser extension.
          </p>
          <p>
          In my free time I love playing soccer, tennis, boxing, reading, and cooking. You can find me enjoying a nice cup of coffee somewhere or seeking out warm weather
          and a beach to go for a surf.
          </p>
        </Column>
      </Layout>
    </>
  )
}

export default AboutPage
