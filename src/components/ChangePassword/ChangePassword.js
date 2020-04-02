import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import Home from '../routes/Home'

const SpaceDiv = styled.div`
  margin-bottom: 100px;
`
const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 8px 40px;
  margin-top: 20px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
background: #00235c;
color: #fff;
cursor: pointer;
}
`

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => msgAlert({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Change Password</h3>
          <Form onSubmit={this.onChangePassword}>
            <SpaceDiv>
              <Form.Group controlId="oldPassword">
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  required
                  name="oldPassword"
                  value={oldPassword}
                  type="password"
                  placeholder="Old Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  required
                  name="newPassword"
                  value={newPassword}
                  type="password"
                  placeholder="New Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <ButtonS
                variant="primary"
                type="submit"
              >
                Submit
              </ButtonS> {' '}
              <Link to="/">
                <ButtonS type="submit" variant="primary">Cancel</ButtonS>
              </Link>
            </SpaceDiv>
            <Home />
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
