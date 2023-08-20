import React, { ReactNode } from "react"
import styled from "styled-components"

const ColumnHeaderWrapper = styled.div`
  margin-bottom: 100px;
`

const ColumnSubtitle = styled.h6`
  margin-top: 30px;
  font-weight: 200;
`


interface Props {
  children?: ReactNode
  // any props that come into the component
  title?: String
  subtitle?: String
}

export default function ColumnHeader(props: Props) {
  return (
    <ColumnHeaderWrapper>
        <h2>{props.title}</h2>
        <ColumnSubtitle>{props.subtitle}</ColumnSubtitle>
    </ColumnHeaderWrapper>
  );
}
