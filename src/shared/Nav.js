import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #00235c;
  background: #00235c;
  color: #fff;
  padding: 5px 20px;
  margin: 20px 0 40px 50px;
  display: inline-block;
  float: center;
  :hover {
background: #edb442;
color: #00235c;
cursor: pointer;
}
  ${props =>
    props.primary &&
    css`
      padding: 5px 35px;
    `};

    ${props =>
    props.secondary &&
      css`
        padding: 5px 35px;
        margin: 0 0 0 29.5%;
      `};

      @media (max-width: 768px) {
         margin: 10px 5px 50px 80px;
    }

      @media (max-width: 425px) {
        margin: 0 5px 20px 140px;
        padding: 5px 20px;
         ${props =>
    props.primary &&
             css`
               margin: 0 5px 20px 40px;
               padding: 5px 20px;
             `};

             ${props =>
    props.secondary &&
               css`
                 margin: 0 5px 20px 80px;
                 padding: 5px 20px;
               `};
     }

       @media (max-width: 375px) {
         margin: 0 5px 20px 110px;
         padding: 5px 20px;
          ${props =>
    props.primary &&
              css`
                margin: 0 5px 20px 35px;
                padding: 5px 20px;
              `};

              ${props =>
    props.secondary &&
                css`
                  margin: 0 5px 20px 50px;
                  padding: 5px 20px;
                `};
    }
`
// navigation buttons to create a profile, all profiles and my profiles
const Nav = () => (
  <nav>
    <Link to="/profiles">
      <ButtonS secondary type="submit">All Profiles</ButtonS>
    </Link>
    <Link to="/profiles-owned">
      <ButtonS primary type="submit">My Profiles</ButtonS>
    </Link>
    <Link to="/create-profile">
      <ButtonS type="submit">Create a Profile</ButtonS>
    </Link>
    <div>
    </div>
  </nav>
)

// <NavLink to='/'>Home</NavLink>
// <NavLink to='/profiles'>Profiles</NavLink>
// <NavLink to='/create-profile'>Create a Profile</NavLink>

export default Nav
