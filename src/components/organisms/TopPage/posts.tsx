import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Anchor from 'src/components/atoms/anchor'
import Container from 'src/components/atoms/container'
import SectionTitle from 'src/components/atoms/section-title'

interface Query {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: string
          fields: {
            date: string
            title: string
            slug: string
          }
        }
      }
    ]
  }
}

const Content: React.VFC = () => {
  // 直近 6 件
  const data = useStaticQuery<Query>(graphql`
    query TopPostQuery {
      allMarkdownRemark(
        limit: 6
        sort: { order: DESC, fields: fields___date }
      ) {
        edges {
          node {
            id
            fields {
              date(formatString: "YYYY-MM-DD")
              title
              slug
            }
          }
        }
      }
    }
  `)

  const Styled = {
    List: styled.ul``,
    ListItem: styled.li`
      margin-bottom: 4px;
      background-color: white;
      transition: 0.2s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        transition: 0.2s;
      }
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 22px 24px;
        text-decoration: none;
        color: #1b5bd7;
        > div {
          text-align: left;
          color: #212529;
          .post-info {
            margin-bottom: 10px;
            .post-tag {
              display: inline-block;
              width: 70px;
              text-align: center;
              background-color: #1b5bd7;
              color: white;
              font-size: 0.9em;
            }
            .post-date {
              font-size: 0.8em;
              margin-left: 1.2em;
              padding-left: 1em;
              border-left: 1px solid #212529;
            }
            .post-title {
              font-size: 1.1em;
            }
          }
        }
      }
    `,
  }

  const posts = data.allMarkdownRemark.edges

  return (
    <section
      id='posts'
      css={css`
        background: #e9eef5;
      `}
    >
      <Container padding='120px 4vw' align='center'>
        <SectionTitle subTitle='最近の投稿'>Recent Post</SectionTitle>
        <Styled.List className='alt'>
          {posts.map(({ node }) => {
            const title = node.fields.title
            const date = node.fields.date
            const slug = node.fields.slug
            return (
              <Styled.ListItem key={node.id}>
                <Anchor to={slug}>
                  <div>
                    <div className='post-info'>
                      <span className='post-tag'>Article</span>
                      <span className='post-date'>{date}</span>
                    </div>
                    <div className='post-title'>{title}</div>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    css={css`
                      font-size: 120%;
                    `}
                  />
                </Anchor>
              </Styled.ListItem>
            )
          })}
        </Styled.List>
      </Container>
    </section>
  )
}

export default Content
