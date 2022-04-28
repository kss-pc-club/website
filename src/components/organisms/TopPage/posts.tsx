import React from 'react'

import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.FC = () => {
  return (
    <section id='posts'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='最近の投稿'>Recent Post</SectionTitle>
      </Container>
    </section>
  )
}

export default Content
