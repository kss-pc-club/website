import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const ArrowSize = 24

const Animation = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-25px, 25px);
    opacity: 0;
  }
`

export default styled.span`
  position: absolute;
  bottom: 20px;
  display: block;
  width: 30px;
  height: 60px;
  color: #000;
  text-align: center;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 0px;
    left: 50%;
    width: ${ArrowSize}px;
    height: ${ArrowSize}px;
    margin-left: ${-ArrowSize / 2}px;
    content: '';
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(-45deg) translate(0, 0);
    animation: ${Animation} 1.5s infinite;
  }
`
