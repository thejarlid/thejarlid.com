import React from "react"
import SplitDetailSection from '@/components/common/SplitDetailSection'
import { WorkFrontMatter } from "@/src/types"

export default function WorkSection({title, date, url, description, imgSrc}: WorkFrontMatter) {
  const projectName = title ? title : ""
  const projectDate = date ? date : ""
  const projectLink = url ? url : ""
  const projectDescription = description ? description : ""
  const projectIconPath = imgSrc ? imgSrc : ""

  return (
    <SplitDetailSection
      name={projectName}
      date={projectDate}
      link={projectLink}
      description={projectDescription}
      imgSrc={projectIconPath}
      sectionMargin="90px"/>
  )
}
