import React from 'react'

import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.VFC = () => {
  return (
    <section id='achievements'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='実績'>Achievements</SectionTitle>
      </Container>
    </section>
  )
}

export default Content
