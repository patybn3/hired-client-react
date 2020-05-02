import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import Home from './Home'
import Img from 'react-cool-img'
import defaultImg from './images/noimage.png'
import loopImg from './images/loop.png'
// import Uploads from './Uploads'

// main div, sets this set up to all divs, outside div, alows all boxes to be
// aligned next to each other
const Inline = styled.div`
    display: inline-block;
    vertical-align: top;
`
// each individual box that displays each candidate, changes color when mouse is
// on to demostrate that the box is clickable
const Candidates = styled.div`
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(215,215,215,.6);
  height: 100%;
  width: 500px;
  margin: 15px 25px;
  padding: 20px 30px;
  text-align: center;
  :hover {
background: rgba(113,185,255,.4);
cursor: pointer;
}
/* smaller screens set up */
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
// profile.title, job title
const Title = styled.p`
  color: #edb442;
  text-align: center;
  font-size: 18px;
  font-style: italic;
`
// candidate location
const Location = styled.h6`
  color: #00235c;
  text-align: center;
  margin-top: -17px;
  margin-bottom: 30px;
`
// top skills
const SkillTitle = styled.h6`
  color: #00235c;
  text-align: center;
  margin-top: 17px;
  margin-bottom: 10px;
`
//
// const Photo = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   display: inline-block;
//   float: left;
// `

// this function cuts the candidates name to fit the Candidate div. If user
// entered a name that is longer than 20 characters it will cut it up to 250px
// and add ... to the end of the name
export function truncate (width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

// calls function into css style for profile name, padding of 9% centralizes
// the name.
const Name = styled.h3`
  text-align: center;
  padding-left: 9%;
  color: #00235c;
  ${truncate('250px')}
`
// the three first skills shown
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
// search bar div that wraps the search bar
const SearchDiv = styled.div`
  text-align: center;
  margin: 3px 0 45px;
`
// a space div between the search bar and the candidates boxes
const SpaceDiv = styled.div`
  margin-top: 50px;
`

const Profiles = props => {
  const [profiles, setProfiles] = useState([])
  const [search, setSearch] = useState('')
  // gets all profiles
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

  // filters all candidates for search bar, allowing to "search" by title, name
  // or location, changing it all toLowerCase is not case sensitive
  const filterProfiles = profiles.filter(profile => {
    return profile.title.toLowerCase().includes(search.toLowerCase()) ||
    profile.name.toLowerCase().includes(search.toLowerCase()) ||
    profile.location.toLowerCase().includes(search.toLowerCase())
  })
  //
  // const notAvailable = function (profile) {
  //   if (profile.skills[0] === '') {
  //     return 'N/A'
  //   } else if (profile.skills[0] !== '') {
  //     return profile.skills[0]
  //   } else if (profile.skills[1] === '') {
  //     return 'N/A'
  //   } else if (profile.skills[1] !== '') {
  //     return profile.skills[1]
  //   } else if (profile.skills[2] === '') {
  //     return 'N/A'
  //   } else if (profile.skills[2] !== '') {
  //     return profile.skills[2]
  //   } else {
  //     return 'N/A'
  //   }
  // }

  // calling function filterProfiles that filter the profiles and mapping all
  // profiles
  const profilesList = filterProfiles.map(profile => (
    // inline calls the main div, when mapping a key must be provided
    <Inline key={profile._id}>
      {/* This link tag allows the whole entire box to become linkable and
        opens that specific candidate, closing of the link tag is after the
        closing of the Candidate tag */}
      <Link
        to={`/profiles/${profile._id}`}
        style={{ textDecoration: 'none' }}
      >
        {/* Candidate div, actual box that displays the candidate */}
        <Candidates>
          <div>
            {/* Img is an img tag Img is from react-cool-image package, allows
              to add an local image as placeholder which is displayed when the
              profile has no picture of when the picture is loading. borderRadius
              allows the picture to be displayed as a circle and objectFit makes the
              image fit in the circle without stretching to fit, must be used with
              objectPosition */}
            {/* using inline style because this is a set tag from a package */}
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
            <SkillTitle>Top Skills:</SkillTitle>
            <Skills>{profile.skills[0]}</Skills>{' '}
            <Skills>{profile.skills[1]}</Skills>{' '}
            <Skills>{profile.skills[2]}</Skills>
          </div>
        </Candidates>
      </Link>
    </Inline>
  ))

  return (
    <Fragment>
      {/* className from bootstrap, bootstrap div */}
      <SearchDiv className="input-group mb-3 col-md-8 mx-auto">
        {/* input form bootstrap, allows user to search, this is the Search
          bar, onchange makes it filter */}
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search By Name, Title or Location"
          onChange={ event => setSearch(event.target.value)}/>
        {/* this div and span creates a gray box right next to the input field
          for search you can add a text to, I added a loop image using react-cool-image */}
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            {/* using inline style because this is a set tag from a package */}
            <Img
              placeholder={loopImg}
              style={{
                width: '35px',
                height: '20px'
              }}
            />
          </span>
        </div>
      </SearchDiv>
      <SpaceDiv>
        {/* space between search bar and candidates */}
      </SpaceDiv>
      {/* calls the list mapped of candidates */}
      {profilesList}
      <Home />
    </Fragment>
  )
}

export default Profiles
