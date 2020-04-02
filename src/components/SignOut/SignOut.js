import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

class SignOut extends Component {
  componentDidMount () {
    const { msgAlert, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => msgAlert({
        heading: 'Signed Out Successfully',
        messagE: messages.signOutSuccess,
        variant: 'success'
      }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
      .catch(() => {
        msgAlert({
          heading: 'Sign Out Failed',
          message: messages.signOutFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
