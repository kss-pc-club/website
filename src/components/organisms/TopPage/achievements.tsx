import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'
import styled from '@emotion/styled'

interface Query {
  allJson: {
    edges: [
      {
        node: {
          id: string;
          date: string;
          title: string;
        };
      }
    ];
  };
}

const Content: React.VFC = () => {
  // 直近 6 件
  const data = useStaticQuery<Query>(graphql`
    query MyQuery {
      allJson(limit: 6, sort: {order: DESC, fields: date}) {
        edges {
          node {
            id
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `)

  const Styled = {
    RecentPost: styled.div`
      color: #737373;
      font-size: 0.96rem;
      text-align: left;
      p {
        margin: 0;
        text-decoration: none;
        color: #27456c;
      }
      li {
        padding: 0.5rem 0;
        border-top: 2px solid #ececec;
        @media (min-width: 993px) {
          padding-left: 5vw;
          padding-right: 5vw;
        }
        > span {
          margin-right: 0.9rem;
          font-size: 0.85rem;
        }
      }
      li:last-child {
        border-bottom: 2px solid #ececec;
        margin-bottom: 10px;
      }
    `,
  };

  const achievements = data.allJson.edges

  return (
    <section id='achievements'>
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='実績'>Achievements</SectionTitle>
        <Styled.RecentPost>
          <ul className='alt'>
            {achievements.map(({ node }) => {
              const title = node.title
              const date = node.date
              return (
                <li key={node.id}>
                  <span>{date}</span>
                  <p>{title}</p>
                </li>
              );
            })}
            <li>
              <span>...</span>
              <p>......</p>
            </li>
          </ul>
        </Styled.RecentPost>
      </Container>
    </section>
  )
}

export default Content
