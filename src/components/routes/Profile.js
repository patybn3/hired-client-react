import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled, { css } from 'styled-components'
import messages from '../AutoDismissAlert/messages'
import Home from './Home'
import Img from 'react-cool-img'
import defaultImg from './images/addImage.png'

const Your = styled.h2`
  text-align: center;
  color: #00235c;
  padding: 20px 0 40px;
`

const Candidate = styled.div`
  display: inline-block;
  vertical-align: top;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(215,215,215,.8);
  height: auto;
  width: 650px;
  margin: 15px 55px;
  padding: 20px 30px;

  @media (max-width: 1024px) {
     width: 600px;
     margin: 15px 15px;
}

  @media (max-width: 768px) {
     width: 100%;
     margin: 0;
}
`

const SpaceLink = styled.div`
  padding 10px;
`

const Welcome = styled.h3`
  text-align: center;
  color: #d1941b;
`

const Fields = styled.p`
  color: #00235c;
`

const Title = styled.p`
  font-style: italic;
  font-weight: 600;
  color: #d1941b;
  font-size: 20px;
`

const SideCandidate = styled.div`
  display: inline-block;
  vertical-align: top;
  background: rgba(113,185,255,.4);
  border-radius: 5px;
  height: auto;
  width: 300px;
  margin: 15px 25px;
  padding: 20px;
  text-align: center;

  @media (max-width: 1024px) {
     width: 250px;
     margin: 15px 15px;
}

  @media (max-width: 768px) {
     width: 100%;
     margin: 0 0 10px 0;
}
`

const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 5px 45px;
  margin-top: 20px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
    background: #00235c;
    color: #fff;
    cursor: pointer;
}
  ${props =>
    props.primary &&
    css`
    border: 2px solid #94140a;
    background: #94140a;
    color: #fff;
    padding: 5px 20px;
    :hover {
      background: #e30000;
    }
  `};
`
const Skills = styled.p`
  color: #00235c;
  /* text-align: center; */
  padding: 5px;
  border-radius: 5px;
  background: #edb442;
  display: inline-block;
  float: center;
  margin-right: 3px;
`

const SkillTitle = styled.h6`
  color: #00235c;
  text-align: center;
  margin-top: 17px;
  margin-bottom: 20px;
`

const Description = styled.h5`
  color: #00235c;
  text-align: center;
  margin: 25px;
`

const FieldsBackground = styled.p`
  color: #00235c;
  background: #ffd582;
  padding: 10px;
`
// const Photo = styled.img`
//   width: 250px;
//   height: 100%;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   border-radius: 5px;
// `

const Profile = props => {
  const [profile, setProfile] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // Call this callback once after the first render, this only occurs once
  // because our dependency array is empty, so our dependencies never change
  // similar to componentDidMount
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      // Make sure to update this.setState to our hooks setMovie function
      .then(res => setProfile(res.data.profile))
      .catch()
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => props.msgAlert({ // remove the props param from the .then()
        heading: 'Delete Profile Success',
        message: messages.deleteProfileSuccess,
        variant: 'success'
      }))
      .catch(() => {
        props.msgAlert({
          heading: 'Delete Profile Failed',
          message: messages.deleteFailure,
          variant: 'danger'
        })
      })
  }

  if (!profile) {
    return <Your>Your Profiles</Your>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/profiles' }
    } />
  }

  if (profile.owner === props.user._id) {
    return (
      <div>
        <SideCandidate>
          <h2>{profile.name}</h2>
          <Title>{profile.title}</Title>
          <div>
            <Img
              style={{ width: '250px',
                height: '100%',
                borderRadius: '5px',
                marginTop: '10px',
                marginBottom: '10px' }}
              placeholder={defaultImg}
              src={`${profile.profileUrl}`}
              alt='Portrait'
            />
          </div>
          <Fields><strong>Location: </strong>{profile.location}</Fields>
          <div>
            <SkillTitle><strong>Relevant Skills:</strong></SkillTitle>
            <Skills>{profile.skills[0]}</Skills>{' '}
            <Skills>{profile.skills[1]}</Skills>{' '}
            <Skills>{profile.skills[2]}</Skills>{' '}
            <Skills>{profile.skills[3]}</Skills>{' '}
            <Skills>{profile.skills[4]}</Skills>{' '}
            <Skills>{profile.skills[5]}</Skills>{' '}
            <Skills>{profile.skills[6]}</Skills>{' '}
            <Skills>{profile.skills[7]}</Skills>{' '}
            <Skills>{profile.skills[8]}</Skills>{' '}
            <Skills>{profile.skills[9]}</Skills>{' '}
          </div>
          <Fields><strong>Email this Candidate:</strong>{' '}
            <a href={'mailto:' + profile.contact}>{profile.contact}</a>
          </Fields>
          <Fields><strong>Website:</strong> {profile.website}</Fields>
          <Fields><strong>Portfolio:</strong> {profile.portfolio}</Fields>
          <Fields><strong>Other Website:</strong> {profile.other}</Fields>
          <ButtonS primary onClick={destroy}>Delete Profile</ButtonS> {' '}
          <Link to={`/profiles/${props.match.params.id}/edit`}>
            <ButtonS>Edit</ButtonS>
          </Link>
          <SpaceLink>
            <Link to="/profiles">Back to all Profiles</Link>
          </SpaceLink>
        </SideCandidate>
        <Candidate>
          <Welcome>Welcome to my profile</Welcome>
          <Fields><strong>Name:</strong> {profile.name}</Fields>
          <Fields><strong>Title:</strong> {profile.title}</Fields>
          <Fields><strong>Education:</strong> {profile.education}</Fields>
          <Description><strong>Description:</strong></Description>
          <Fields>{profile.description}</Fields>
          <div>
            <FieldsBackground><strong>Salary Requirements:</strong>
              $ {profile.salary}</FieldsBackground>
          </div>
        </Candidate>
        <Home />
      </div>
    )
  }
  return (
    <div>
      <SideCandidate>
        <h2>{profile.name}</h2>
        <Title>{profile.title}</Title>
        <div>
          <Img
            style={{ width: '250px',
              height: '100%',
              borderRadius: '5px',
              marginTop: '10px',
              marginBottom: '10px' }}
            placeholder={defaultImg}
            src={`${profile.profileUrl}`}
            alt='Portrait'
          />
        </div>
        <Fields>Location: {profile.location}</Fields>
        <div>
          <SkillTitle><strong>Relevant Skills:</strong></SkillTitle>
          <Skills>{profile.skills[0]}</Skills>{' '}
          <Skills>{profile.skills[1]}</Skills>{' '}
          <Skills>{profile.skills[2]}</Skills>{' '}
          <Skills>{profile.skills[3]}</Skills>{' '}
          <Skills>{profile.skills[4]}</Skills>{' '}
          <Skills>{profile.skills[5]}</Skills>{' '}
          <Skills>{profile.skills[6]}</Skills>{' '}
          <Skills>{profile.skills[7]}</Skills>{' '}
          <Skills>{profile.skills[8]}</Skills>{' '}
          <Skills>{profile.skills[9]}</Skills>{' '}
        </div>
        <Fields><strong>Email this Candidate:</strong>{' '}
          <a href={'mailto:' + profile.contact}>{profile.contact}</a>
        </Fields>
        <Fields><strong>Website:</strong> {profile.website}</Fields>
        <Fields><strong>Portfolio:</strong> {profile.portfolio}</Fields>
        <Fields><strong>Other Website:</strong> {profile.other}</Fields>
        <SpaceLink>
          <Link to="/profiles">Back to all Profiles</Link>
        </SpaceLink>
      </SideCandidate>
      <Candidate>
        <Welcome>Welcome to my profile</Welcome>
        <Fields><strong>Name:</strong> {profile.name}</Fields>
        <Fields><strong>Title:</strong> {profile.title}</Fields>
        <Fields><strong>Education:</strong> {profile.education}</Fields>
        <Description><strong>Description:</strong></Description>
        <Fields>{profile.description}</Fields>
        <FieldsBackground><strong>Salary Requirements:</strong>
          $ {profile.salary}</FieldsBackground>
      </Candidate>
      <Home />
    </div>
  )
}

export default Profile
