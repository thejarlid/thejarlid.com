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
          You can read about my prior experience at Instagram and Microsoft <a style={{fontWeight:"400"}} href="/dilraj-devgun-resume.pdf">here</a> and see some of my other 
          projects on my <a style={{fontWeight:"400"}} href="https://github.com/thejarlid">Github</a>. I have a passion in teaching as I would not be here without the 
          patience of those who taught me and I feel as if its only right to pass it on. Currently I'm an Adjunct Lecturer at CUNY teaching OS II and Programming II and previously
          throughout college I was a TA for the intro progamming course and later the upper division OS course. Post-grad I volunteer occasionally to TA for Stanford&apos;s 
          Code In Place program. In general I love learning (and teaching) and I use code as my medium to express my creativity.
          </p>
          <p style={{marginBottom:"1.5rem"}}>
          In my free time I love playing soccer, tennis, boxing, reading, and cooking. You can find me enjoying a nice cup of coffee somewhere or seeking out warm weather
          and a beach to go for a surf.
          </p>
        </Column>
      </Layout>
    </>
  )
}

export default AboutPage
