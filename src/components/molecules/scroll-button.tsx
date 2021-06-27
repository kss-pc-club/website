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

const ScrollButton = styled.span`
  width: 30px;
  height: 60px;
  display: block;
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: black;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 50%;
    width: ${ArrowSize}px;
    height: ${ArrowSize}px;
    margin-left: ${-ArrowSize / 2}px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    transform: rotate(-45deg) translate(0, 0);
    animation: ${Animation} 1.5s infinite;
  }
`
export default ScrollButton
