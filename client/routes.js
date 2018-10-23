import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {HomePage, Project, About, Resume} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are only available after logging in */}
        <Route path="/home" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={Project} />
        <Route path="/aboutme" component={About} />
        <Route path="/resume" component={Resume} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
