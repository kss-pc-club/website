import React from 'react'

import ScrollButton from '@components/molecules/scroll-button'
import styled from '@emotion/styled'

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 1rem);
  padding: 10px 0px;
  font-size: min(12vw, 6em);
  line-height: 1.1em;
`

const Hero: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Base>
        <div>
          <p>KSS PC Club</p>
        </div>
        <ScrollButton />
      </Base>
    </React.Fragment>
  )
}

export default Hero
