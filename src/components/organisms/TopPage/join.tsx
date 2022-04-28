import React from 'react'

import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.VFC = () => {
  return (
    <section id='join-us'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='PC部に参加する'>Join us</SectionTitle>
      </Container>
    </section>
  )
}

export default Content
