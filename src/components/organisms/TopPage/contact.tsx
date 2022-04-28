import React from 'react'

import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.VFC = () => {
  return (
    <section id='contact'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='お問い合わせ'>Contact</SectionTitle>
      </Container>
    </section>
  )
}

export default Content
