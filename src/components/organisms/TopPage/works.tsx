import React from 'react'
import Slider, { Settings } from 'react-slick'

import Container from '@components/atoms/container'
import { css } from '@emotion/react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <section
      id='works'
      css={css`
        background: #e9eef5;
      `}
    >
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='プロジェクトや作品'>
          Project & Works
        </SectionTitle>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Container>
    </section>
  )
}

export default Content
