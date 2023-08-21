import React from "react"
import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => props.sectionMargin || "50px"} 0;
`

const InfoColumn = styled.div`
  min-width: 80px;
  max-width: 80px;
  width: 80px;
  margin-right: 40px;
`

const DetailColumn = styled.div`
  flex-grow: 1;
  `

const SectionTitle = styled.a`
  font-weight: 300;
`

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  margin-top: 10px;
  border-radius: 15%;
  overflow: hidden;
`

const DateText = styled.p`
  color: rgb(160, 160, 160);
`

const DetailDescriptionText = styled.p`
  margin-top: 10px;
`

export default function SplitDetailSection(props) {
  const projectName = props.name ? props.name : ""
  const projectLink = props.link ? props.link : "."
  const sectionMargin = props.sectionMargin ? props.sectionMargin : null

  return (
    <SectionWrapper sectionMargin={sectionMargin}>
      <InfoColumn>
        { props.date && <DateText>{props.date}</DateText> }
        { props.link && (
          <Thumbnail>
            <Link href={projectLink}><Image src={`/work/${props.imgSrc}`} layout='fill' objectFit='contain' alt={projectName} /></Link>
          </Thumbnail>
        )}
      </InfoColumn>
      <DetailColumn>
        { props.name && <SectionTitle href={projectLink}>{props.name}</SectionTitle> }
        { props.description && <DetailDescriptionText>{props.description}</DetailDescriptionText> }
      </DetailColumn>
    </SectionWrapper>
  )
}
