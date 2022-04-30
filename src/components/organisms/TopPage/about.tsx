import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Anchor from 'src/components/atoms/anchor'
import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.VFC = () => {
  const data = useStaticQuery(graphql`
    query AboutUs {
      site {
        siteMetadata {
          social {
            github
            youtube
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  const Styled = {
    Social: styled.div`
      font-size: 30px;
      margin-top: 1rem;
      > a {
        color: #212529;
        text-decoration: none;
        margin-right: 0.7rem;
        margin-left: 0.7rem;
        transition: 0.2s;
        &:hover {
          color: gray;
          transition: 0.2s;
        }
      }
    `,
  }

  return (
    <section id='about-us'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='私たちについて'>About us</SectionTitle>
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
            主に、プログラミング演習や作曲活動、デザイン、コンピューターグラフィックス、3Dプリンターでの創作など様々な活動を行っており、
            統計グラフコンクールや情報オリンピック、その他コンテストに出場・出展しています。
            文化祭では、各個人が作ったゲームなどの作品を展示しています。
          </p>
        </div>
        <Styled.Social>
          <Anchor
            to={`https://github.com/${social.github}`}
            removeExternalIcon={true}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Anchor>
          <Anchor
            to={`https://youtube.com/channel/${social.youtube}`}
            removeExternalIcon={true}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Anchor>
        </Styled.Social>
      </Container>
    </section>
  )
}

export default Content
