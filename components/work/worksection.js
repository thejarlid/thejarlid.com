import React from "react"
import SplitDetailSection from '@/components/work/SplitDetailSection'

export default function WorkSection(props) {
  const projectName = props.title ? props.title : ""
  const projectDate = props.date ? props.date : ""
  const projectLink = props.url ? props.url : ""
  const projectDescription = props.description ? props.description : ""
  const projectIconPath = props.imgSrc ? props.imgSrc : ""

  return (
    <SplitDetailSection
      name={projectName}
      date={projectDate}
      link={projectLink}
      description={projectDescription}
      imgSrc={projectIconPath}
      sectionMargin="75px"/>
  )
}
