import { PageProps } from 'gatsby'
import React from 'react'

import Container from '@components/atoms/container'
import Layout from '@components/layout'
import Hero from '@components/organisms/hero'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import SEO from '@utils/seo'

const HeadingLineWidth = 60

const Heading = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 2.3em;
  font-weight: 500;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: calc(50% - ${HeadingLineWidth / 2}px);
    width: ${HeadingLineWidth}px;
    height: 5px;
    border-radius: 5px;
    background: black;
    opacity: 0.5;
  }
`

const RootIndex_page: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title='Top' />
        <Hero />
        <section id='about-us'>
          <Container padding='80px 4vw' align='center'>
            <Heading>About us</Heading>
            <div
              css={css`
                width: 95%;
                margin: auto;
                text-align: left;
              `}
            >
              <p>
                茨城県立古河中等教育学校のパソコン部です。
                普段は、平日の月水金曜日の放課後に特別棟2階奥のパソコン室で活動しています。
                主に、プログラミング演習や作曲活動、デザイン、コンピューターグラフィックなど様々な活動を行っており、
                統計グラフコンクールや情報オリンピック、その他コンテストに出場・出展しています。
                文化祭では、各個人が作ったゲームなどの作品を展示しています。
              </p>
            </div>
          </Container>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default RootIndex_page
