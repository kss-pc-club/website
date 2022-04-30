import React from 'react'

import styled from '@emotion/styled'

type SectionTitleProps = {
  subTitle: string
  color?: string
  subColor?: string
  children?: React.ReactNode
}

const SectionTitle: React.VFC<SectionTitleProps> = (props) => {
  const Styled = styled.div`
    font-size: 1.35rem;
    color: ${props.subColor || '#212529'};
    margin-bottom: 1.2rem;
    h2 {
      font-size: 0.6em;
      position: relative;
      display: block;
      padding-bottom: 0.8em;
      margin-bottom: 0.3em;
      font-weight: 500;
      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: calc(50% - ${40 / 2}px);
        width: ${40}px;
        height: 2px;
        background: ${props.subColor || '#212529'};
      }
    }
    h1 {
      color: ${props.color || '#113e96'};
      position: relative;
      display: inline-block;
      font-weight: 500;
      font-size: 1.6em;
      line-height: 1.7;
      padding-bottom: 1rem;
    }
  `
  return (
    <React.Fragment>
      <Styled>
        <h2>{props.subTitle}</h2>
        <h1>{props.children}</h1>
      </Styled>
    </React.Fragment>
  )
}

export default SectionTitle
