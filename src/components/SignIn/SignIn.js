// This file is built using reach components

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

// Forms from bootstrap
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

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/profiles'))
      .catch(() => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          {/* using inline style to avoid importing styled components for one single thing */}
          <h3 style={{ fontWeight: '600', color: '#00235c' }}>Sign In</h3>
          <Form onSubmit={this.onSignIn}>
            <SpaceDiv>
              <Form.Group controlId="email">
                <Form.Label style={{ color: '#00235c' }}>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label style={{ color: '#00235c' }}>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
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
          </Form>
          <Home />
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
