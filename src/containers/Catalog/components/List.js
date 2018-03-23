// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TransitionMotion, spring } from 'react-motion'
import { H1 } from '../../../components/Typography'
import { getFilteredCatalog } from '../selectors'
import { Card } from '../styled/List'
import type { Item } from '../types'


type Props = {
  fetching: boolean,
  catalog: Array<Item>,
}

type TransitionStyle = {
  data: any,
  key: string,
  style: any,
}

class CatalogList extends React.Component<Props> {
  getDefaultStyles = () => {
    const { catalog } = this.props
    return catalog.map((item: Item) => ({
      data: item,
      key: item.id.toString(),
      style: {
        width: 0,
        height: 0,
        opacity: 1,
      },
    }: TransitionStyle))
  }

  getStyles = () => {
    const { catalog } = this.props
    return catalog.map((item: Item) => ({
      data: item,
      key: item.id.toString(),
      style: {
        width: spring(200),
        height: spring(200),
        opacity: spring(1),
      },
    }: TransitionStyle))
  }

  willEnter = () => ({
    width: 0,
    height: 0,
    opacity: 1,
  })

  willLeave = () => {
    return {
      width: spring(0),
      height: spring(0),
      opacity: spring(0),
    }
  }

  render() {
    const { fetching } = this.props

    return (
      <div className="ListComponent">
        {fetching && <H1>Loading...</H1>}
        {!fetching &&
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
          >
            {interpolatedStyles =>
              (
                <div>
                  {interpolatedStyles.map((config: TransitionStyle) => {
                    return (
                      <Card
                        key={config.key}
                        style={{ ...config.style }}
                      >
                        {config.data.title} - {config.data.description} - <Link to={`/catalog/${config.data.id}`}>Go</Link>
                      </Card>
                    )
                  })}
                </div>
              )
            }
          </TransitionMotion>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  catalog: getFilteredCatalog(state),
  fetching: state.catalog.fetching,
})

export default connect(mapStateToProps)(CatalogList)
