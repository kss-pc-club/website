import React from 'react'

import styled from '@emotion/styled'

const Base = styled.footer`
  margin-top: auto;
  padding: 0.5em 1em;
  color: var(--bs-white);
  background-color: var(--bs-secondary);

  p {
    margin: 0;
    text-align: center;
  }
`

const Footer: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Base>
        <p>
          <nobr>
            Copyright &copy; {new Date().getFullYear()} KSS PC Club <wbr />
            All Rights Reserved.
          </nobr>
        </p>
      </Base>
    </React.Fragment>
  )
}

export default Footer
