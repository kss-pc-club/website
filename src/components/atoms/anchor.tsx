import { Link } from 'gatsby'
import React from 'react'

import { css } from '@emotion/react'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type AnchorProps = {
  to: string
  target?: string
  removeExternalIcon?: boolean
  children?: React.ReactNode
}

const Anchor: React.FC<AnchorProps> = (props) => {
  const isExternal =
    props.to.startsWith('http://') || props.to.startsWith('https://')
  return (
    <React.Fragment>
      {isExternal ? (
        <a href={props.to} target='_blank' rel='noopener noreferrer'>
          {props.children}
          {props.removeExternalIcon ? (
            <></>
          ) : (
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              css={css`
                font-size: 0.8em;
                margin-left: 0.4em;
                vertical-align: 0%;
              `}
            />
          )}
        </a>
      ) : (
        <Link to={props.to} target={props.target}>
          {props.children}
        </Link>
      )}
    </React.Fragment>
  )
}

export default Anchor
