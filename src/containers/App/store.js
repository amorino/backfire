import { observable } from 'mobx'
import type { Size } from './types'

type State = {
  size: Size,
};

export default class AppStore {
  @observable size : Size
}
