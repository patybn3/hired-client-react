import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import Home from './Home'

const Inline = styled.div`
    display: inline-block;
    vertical-align: top;
`

const Candidates = styled.div`
  background: rgba(113,185,255,.4);
  border-radius: 10px;
  font-size: 20px;
  min-height: 300px;
  max-height: 100%;
  width: 500px;
  margin: 15px 25px;
  padding: 20px;

  @media (max-width: 1024px) {
     width: 430px;
     margin: 15px 15px;
}

  @media (max-width: 768px) {
    width: 700px;
    margin: 15px 0;
}
  @media (max-width: 425px) {
    height: 100%;
    width: 400px;
    margin: 10px 0;
}
 @media (max-width: 375px) {
   height: 100%;
   width: 100%;
   margin: 10px 0;
}
`

const Name = styled.h2`
  text-align: center;
  color: #00235c;
`

const Title = styled.p`
  color: #d1941b;
  text-align: center;
  font-size: 18px;
  font-style: italic;
`
const Content = styled.h6`
  color: #00235c;
  text-align: center;
`

const Description = styled.h5`
  text-align: left;
  color: #d1941b;
  padding: 10px 0 0;
`
const Paragraph = styled.p`
  text-align: center;
  color: #00235c;
  padding: 5px 0;
`

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: inline-block;
  float: left;
`

const ProfilesOwned = props => {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles-owned`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setProfiles(res.data.profiles))
      .catch()
  }, [])

  const profilesList = profiles.map(profile => (
    <Inline key={profile._id}>
      <Candidates>
        <div>
          <Photo src={`${profile.profileUrl}`} alt="Candidate's Portrait" />
        </div>
        <div>
          <Name>{profile.name}</Name>
        </div>
        <div>
          <Title>{profile.title}</Title> <Content>{profile.location}</Content>
        </div>
        <div>
          <Description>Short Description:</Description>
          <Paragraph>{profile.name} is a {profile.title} who is current located in {profile.location}...</Paragraph>
        </div>
        <Link to={`/profiles-owned/${profile._id}`}>See More</Link>
      </Candidates>
    </Inline>
  ))

  return (
    <Fragment>
      {profilesList}
      <Home />
    </Fragment>
  )
}

export default ProfilesOwned
