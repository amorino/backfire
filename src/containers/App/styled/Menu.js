// @flow
import styled, { css } from 'styled-components'
import { colors } from '../../../styles'
import { Button } from '../../../components/styled/Button'

const barWidth = 27
const barHeight = 2
const barSpacing = 10

const ease = 'ease-out'

// Desktop

export const MenuDesktop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`

export const NormalButton = Button.extend``

// Mobile

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  z-index: 99;
  color: ${colors.white};
  padding: ${barWidth + 20}px 40px;
`

export const RouteContainer = styled.div`
  margin: 20px 0;
`

export const RouteButton = styled.button`
  margin: 0;
  text-transform: uppercase;
  color ${colors.white};
  border: none;
  border-radius: none;
`

export const Trigger = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${barWidth + 18}px;
  height: ${barWidth + 18}px;
  z-index: 100;
  background: ${colors.black};
`

export const Icon = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: ${barWidth}px;
  height: ${barHeight + (barSpacing * 2)}px;
  cursor: pointer;
  border: none;
  padding: 0;
`

export const Bar = styled.div`
  position: relative;
  background: ${colors.white};
  transition: all 0ms 300ms, background 1.33s ${ease};
  width: ${barWidth}px;
  height: ${barHeight}px;
  &:after,
  &:before {
      width: ${barWidth}px;
      height: ${barHeight}px;
      background: ${colors.white};
      left: 0;
      content: "";
      position: absolute;
  }
  &:before {
      bottom: ${barSpacing}px;
      transition: bottom 300ms 300ms ${ease}, transform 300ms ${ease}, background 1.33s ${ease};
  }
  &:after {
      top: ${barSpacing}px;
      transition: top 300ms 300ms ${ease}, transform 300ms ${ease}, background 1.33s ${ease};
  }
  ${props => props.opened && css`
		background: ${colors.black};
    &:after {
      top: 0;
      transform: rotate(45deg);
      transition: top 300ms ${ease}, transform 300ms 300ms ${ease}, background 0.3s ${ease};
      background: ${colors.white};
    }
    &:before {
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 300ms ${ease}, transform 300ms 300ms ${ease}, background 0.3s ${ease};
      background: ${colors.white};
	`}
`
