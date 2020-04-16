import React, { Fragment, Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled, { css } from 'styled-components'
import logo from './hired.png'
import logoTwo from './Hired-navbar.png'
import { Link } from 'react-router-dom'
import Layout from '../../shared/Layout'
import { ScrollTo } from 'react-scroll-to'

class MyScroll extends Component {
  render () {
    return (
      <ScrollTo>
        {({ scroll }) => (
          scroll({ y: 500, smooth: true })
        )}
      </ScrollTo>
    )
  }
}

const authenticatedOptions = (
  <Fragment>
    <div>
      <Nav.Link href="#create-profile">Create a Profile</Nav.Link>
      <MyScroll />
    </div>
    <div>
      <Nav.Link href="#change-password">Change Password</Nav.Link>
      <MyScroll />
    </div>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>

  </Fragment>
)

const authBody = (
  <div>
    <Layout />
  </div>
)

const unauthenticatedOptions = (
  <Fragment>
    <div>
      <Nav.Link href="#sign-up">Sign Up</Nav.Link>
      <MyScroll />
    </div>
    <div>
      <Nav.Link href="#sign-in">Sign In</Nav.Link>
      <MyScroll />
    </div>
  </Fragment>
)

const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #00235c;
  background: #00235c;
  color: #fff;
  margin: -20px 50px 70px 340px;
  padding: 8px 60px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
background: #edb442;
color: #00235c;
cursor: pointer;
}
  ${props =>
    props.primary &&
    css`
      padding: 8px 65px;
    `};

    @media (max-width: 1024px) {
       margin: -10px 3px 20px 250px;
       font-size: 15px;
       padding: 8px 60px;
       ${props =>
    props.mobile375signUp &&
         css`
           padding: 8px 45px;
         `};
         ${props =>
    props.mobile375signIn &&
           css`
             padding: 8px 49px;
           `};
  }

  @media (max-width: 768px) {
     margin: -10px 3px 20px 170px;
     font-size: 15px;
     padding: 8px 60px;
     ${props =>
    props.mobile375signUp &&
       css`
         padding: 8px 45px;
       `};
       ${props =>
    props.mobile375signIn &&
         css`
           padding: 8px 49px;
         `};
}
    @media (max-width: 425px) {
       margin: -20px 30% 20px;
       font-size: 15px;
       padding: 8px 60px;
       ${props =>
    props.mobile425signUp &&
         css`
           padding: 8px 55px;
         `};
 }
   @media (max-width: 375px) {
      margin: -20px 30% 20px;
      font-size: 15px;
      padding: 8px 60px;
      ${props =>
    props.mobile375signUp &&
        css`
          padding: 8px 45px;
        `};
        ${props =>
    props.mobile375signIn &&
          css`
            padding: 8px 49px;
          `};
}
`

const unauthBody = (
  <div>
    <Link to="/sign-up">
      <ButtonS type="submit" mobile425signUp mobile375signUp>Sign Up</ButtonS>
    </Link>
    <Link to="sign-in">
      <ButtonS type="submit" primary mobile375signIn>Sign In</ButtonS>
    </Link>
    <MyScroll />
  </div>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href='#/'>Home</Nav.Link>
  </Fragment>
)

const SecondNav = styled.section`
  padding: 140px;
  margin: auto;
  background: rgb(113,185,255);
  background: radial-gradient(circle, rgba(113,185,255,1) 0%, rgba(45,110,187,1) 100%);
`

const Title = styled.h5`
  margin: 6px;
`

const Circle = styled.div`
  border-radius: 50%;
  background-color: #3984cc;
  width: 150px;
  height: 150px;
  position: absolute;
  opacity: 0;
  animation: scaleIn 5s infinite cubic-bezier(.36, .11, .89, .32);
  @keyframes scaleIn {
  from {
    transform: scale(.5, .5);
    opacity: .5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
}
`

const Container = styled.div`
    /* width: 600px; */
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

const Item = styled.div`
  z-index: 100;
  padding: 5px;
`
const OuterContainer = styled.div`
  margin-top: -200px;
`

const Header = ({ user }) => (
  <div>
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand href="#">
        <div className="logo">
          <img src={logoTwo} width="25" height="25" alt=""/>
        </div>
      </Navbar.Brand>
      <div>
        <Title>Hired</Title>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <SecondNav>
    </SecondNav>
    <OuterContainer id="outerContainer">
      <Container id="container">
        <Item id="item">
          <img src={logo} width="100" height="100" />
        </Item>
        <Circle className="circle" style={{ animationDelay: '-4s' }}></Circle>
        <Circle className="circle" style={{ animationDelay: '-3s' }}></Circle>
        <Circle className="circle" style={{ animationDelay: '-2s' }}></Circle>
        <Circle className="circle" style={{ animationDelay: '-1s' }}></Circle>
      </Container>
    </OuterContainer>
    { !user ? unauthBody : authBody}
  </div>
)

export default Header
