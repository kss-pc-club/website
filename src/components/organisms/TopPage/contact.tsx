import React from 'react'

import { css } from '@emotion/react'
import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.FC = () => {
  return (
    <section id='contact'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='お問い合わせ'>Contact</SectionTitle>
        <div
          css={css`
            width: 95%;
            margin: auto;
            text-align: center;
          `}
        >
          <p>
            部長や顧問の先生に直接お尋ねください。
            部活動の時間にご自由にお越しいただいて構いません。
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Content
