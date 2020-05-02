// refer to Profile.js for annotations

import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import Home from './Home'
import Img from 'react-cool-img'
import defaultImg from './images/noimage.png'

const Inline = styled.div`
    display: inline-block;
    vertical-align: top;
`

const Candidates = styled.div`
  background: rgba(113,185,255,.4);
  border-radius: 10px;
  height: 100%;
  width: 500px;
  margin: 20px;
  padding: 20px 30px;
  text-align: right;
  :hover {
background: #e3e3e3;
cursor: pointer;
}

  @media (max-width: 1024px) {
     width: 430px;
     margin: 15px 15px;
}

  @media (max-width: 768px) {
    width: 700px;
    margin: 15px 0;
}
  @media (max-width: 425px) {
    width: 400px;
    margin: 10px 0;
}
 @media (max-width: 375px) {
   width: 100%;
   margin: 10px 0;
}
`

const Title = styled.p`
  color: #d1941b;
  text-align: center;
  font-size: 18px;
  font-style: italic;
`
const Location = styled.h6`
  color: #00235c;
  text-align: center;
  margin-top: -17px;
  margin-bottom: 30px;
`

// const Description = styled.h5`
//   text-align: center;
//   color: #d1941b;
//   padding: 10px 0 0;
// `
// const Paragraph = styled.p`
//   text-align: center;
//   color: #00235c;
//   padding: 5px 0;
// `

//
// const Photo = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   display: inline-block;
//   float: left;
// `

export function truncate (width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

const Name = styled.h3`
  text-align: center;
  color: #00235c;
  ${truncate('250px')}
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
      <Link
        to={`/profiles-owned/${profile._id}`}
        style={{ textDecoration: 'none' }}
      >
        <Candidates>
          <div>
            <Img
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                display: 'inline-block',
                float: 'left',
                objectFit: 'cover',
                objectPosition: '40% 0'
              }}
              placeholder={defaultImg}
              src={`${profile.profileUrl}`}
              alt='Portrait'
            />
          </div>
          <div>
            <Name>{profile.name}</Name>
          </div>
          <div>
          </div>
          <div>
            <Title>{profile.title}</Title> <Location>in {profile.location}</Location>
          </div>
          <div>
            <h6>Click to Edit or Delete this Profile</h6>
          </div>
        </Candidates>
      </Link>
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
