import React from 'react'

import { css } from '@emotion/react'
import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

const Content: React.FC = () => {
  return (
    <section id='join-us'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='PC部に参加する'>Join us</SectionTitle>
        <div
          css={css`
            width: 95%;
            margin: auto;
            text-align: left;
          `}
        >
          <p>
            古河中等生であれば、パソコンやプログラミングの経験がなくても、初心者でも大歓迎です！
            また、見学もできます。考査一週間前を除く月水金曜日放課後にパソコン室にて活動していますのでご自由にお越しください。
            入部や転部については生徒手帳に記載されている部活動規定に従ってください。
          </p>
        </div>
        <div
          css={css`
            width: 95%;
            margin: auto;
            text-align: center;
          `}
        >
          <p>
            申し訳ございませんが、現在、古河中等生のみの入部とさせていただいております。ご注意のほどよろしくお願いします。
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Content
