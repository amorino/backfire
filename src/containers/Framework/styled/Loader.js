// @flow
import styled from 'styled-components'
import { colors } from '../../../styles'
import favicon from '../../../favicon.png'

export const RootLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  z-index: 999;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  text-align: center;
`

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background-url: url(${favicon});
  background-repeat: no-repeat;
  background-color: ${colors.black};
  background-size: cover;
`

export const Line = styled.div`
  background: ${colors.white};
  height: 4px;
`
export const Text = styled.span`
  display: block;
  margin: 30px 0;
`
