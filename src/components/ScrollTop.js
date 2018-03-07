/*************
This component scrolls to the top of the page when you navigate to a different page
********/

import React from 'react'
import { withRouter } from 'react-router'

class ScrollToTop extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
