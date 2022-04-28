import React from 'react'

import styled from '@emotion/styled'
import ScrollButton from 'src/components/molecules/scroll-button'

const Base = styled.section`
  background: #525e88 url('images/cover.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 10px 0px;
  font-size: min(12vw, 6em);
  line-height: 1.1em;
`

const Hero_elem = () => {
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

export default Hero_elem
