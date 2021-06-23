import React from 'react'

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

const More = styled.div`
  width: 30px;
  height: 60px;
  display: block;
  position: absolute;
  bottom: 30px;
  text-align: center;
  font-size: 0.3em;
  cursor: pointer;
`

const Hero: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Base>
        <div>
          <p>KSS PC Club</p>
        </div>
        <More>
          <p>MORE</p>
        </More>
      </Base>
    </React.Fragment>
  )
}

export default Hero
