import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import Home from './Home'
import Img from 'react-cool-img'
import defaultImg from './images/noimage.png'
// import Uploads from './Uploads'

const Inline = styled.div`
    display: inline-block;
    vertical-align: top;
`

const Candidates = styled.div`
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(215,215,215,.6);
  height: 100%;
  width: 500px;
  margin: 15px 25px;
  padding: 20px 30px;
  text-align: right;
  :hover {
background: rgba(113,185,255,.4);
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

const Name = styled.h2`
  text-align: center;
  color: #00235c;
`

const Title = styled.p`
  color: #edb442;
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

const Skills = styled.p`
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background: #00235c;
  display: inline-block;
  float: center;
  margin-right: 3px;
`

const SkillTitle = styled.h6`
  color: #00235c;
  text-align: center;
  margin-top: 17px;
  margin-bottom: 10px;
`
// const Paragraph = styled.p`
//   text-align: right;
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

const Profiles = props => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles`,
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
        to={`/profiles/${profile._id}`}
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
            <SkillTitle>Relevant Skills:</SkillTitle>
            <Skills>{profile.skills[0]}</Skills>{' '}
            <Skills>{profile.skills[1]}</Skills>{' '}
            <Skills>{profile.skills[2]}</Skills>...
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

export default Profiles
