import React from "react"
import Column from '@/components/common/column'
import ColumnHeader from '@/components/common/columnHeader'
import Layout from '@/components/common/layout'

const AboutPage = () => {
  return (
    <Layout>
      <Column>
        <ColumnHeader title="about" subtitle=""  />
        <p style={{marginBottom:"1.5rem"}}>
        I'm a caffeine based lifeform currently working as a software engineer at Meta Reality Labs on the Computer Vision and ML firmware team. 
        I previously worked at Microsoft on the HoloLens Systems, Firmware, and Drivers team and at Instagram on the Web Server Team. Outside of my job my 
        technical interests are in tinkering with microcontrollers and playing with some more Computer Vision and ML projects. I also love to design and 
        develop iOS apps that have a focus on sparking wonder and excitement with their use and design. In general I love learning (and teaching) new
        things and I use code as my medium to express my creativity. 
        </p>
        <p>
        In my free time I love playing soccer, tennis, boxing, reading, and cooking. You can find me enjoying a nice cup of coffee somewhere or seeking out warm weather and a beach to go for a surf.
        </p>
      </Column>
    </Layout>
  )
}

export default AboutPage
