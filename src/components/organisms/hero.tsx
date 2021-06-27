import React from 'react'

import ScrollButton from '@components/molecules/scroll-button'
import styled from '@emotion/styled'

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 6em;
  line-height: 1.1em;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
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
