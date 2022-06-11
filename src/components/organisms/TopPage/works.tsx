import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider, { Settings } from 'react-slick'

import styled from '@emotion/styled'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
  }
  const Styled = {
    SliderItem: styled.div`
      margin-bottom: 20px;
    `,
  }
  return (
    <section id='works'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='プロジェクトや作品'>
          Project & Works
        </SectionTitle>
        <Slider {...settings}>
          <Styled.SliderItem>
            <StaticImage
              src='./../../../images/works/typing.png'
              alt='typing'
              placeholder='blurred'
              layout='constrained'
              height={350}
            />
          </Styled.SliderItem>
          <Styled.SliderItem>
            <StaticImage
              src='./../../../images/works/monitor.png'
              alt='monitor'
              placeholder='blurred'
              layout='constrained'
              height={350}
            />
          </Styled.SliderItem>
          <Styled.SliderItem>
            <StaticImage
              src='./../../../images/works/discord-bot.png'
              alt='discord-bot'
              placeholder='blurred'
              layout='constrained'
              height={350}
            />
          </Styled.SliderItem>
        </Slider>
      </Container>
    </section>
  )
}

export default Content
