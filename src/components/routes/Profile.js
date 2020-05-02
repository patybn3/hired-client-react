// this file was built using React Hooks
// this page displays each individual profile

import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled, { css } from 'styled-components'
import messages from '../AutoDismissAlert/messages'
import Home from './Home'
import Img from 'react-cool-img'
import defaultImg from './images/addImage.png'
import spinImg from './images/spin.gif'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

// Your is the style for text displayed on the scheen if Profiles cannot be reached
// const Your = styled.h2`
//   text-align: center;
//   color: #00235c;
//   padding: 20px 0 40px;
// `
// this is the div box contains the description of the candidate
const Candidate = styled.div`
/* first line was used to display this container next to the other container
on the page */
  display: inline-block;
  vertical-align: top;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(215,215,215,.8);
  height: auto;
  width: 650px;
  margin: 15px 55px;
  padding: 20px 30px;
/* set up for smaller screens */
  @media (max-width: 1024px) {
     width: 600px;
     margin: 15px 15px;
}

  @media (max-width: 768px) {
     width: 100%;
     margin: 0;
}
`
// a pace between the content and the link to go back to all profiles page
const SpaceLink = styled.div`
  padding 10px;
`
// welcome to my profile text displayed insider of Candidates div
const Welcome = styled.h3`
  text-align: center;
  color: #d1941b;
`
// Fields is used by most of the content on this page
const Fields = styled.p`
  color: #00235c;
  margin-top: 20px;
  margin-bottom: 10px;
  word-wrap: break-word;
`
// design for the candidate's title
const Title = styled.p`
  font-style: italic;
  text-shadow: 1px 1px 3px #fafafa;
  color: #d1941b;
  font-size: 19px;
`
// this is the box that is displayed on the left side of the screen next to
// the Candidate div
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
// set up for the buttons on the page, delete profile and edit profile
const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 5px 45px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  /* mouse on color change*/
  :hover {
    background: #00235c;
    color: #fff;
    cursor: pointer;
} /* prps css adds a class to a class (primary) in this case this class changes
the color and sizing of the delete button */
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
// skills divs inside of SideCandidate
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
// title for skills, relevant skills
const SkillTitle = styled.h6`
  color: #00235c;
  text-align: center;
  margin-top: 17px;
  margin-bottom: 20px;
`
// description section title
const Description = styled.h5`
  color: #00235c;
  text-align: center;
  margin: 25px;
`
// salary background
const FieldsBackground = styled.p`
  color: #00235c;
  background: #ffd582;
  padding: 10px;
`
// profile name set up
const Name = styled.h3`
  color: #00235c;
`

const Profile = props => {
  const [profile, setProfile] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [show, setShow] = useState(false)
  // handleShow and handleClose are the calls for the Modal
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Call this callback once after the first render, this only occurs once
  // because our dependency array is empty, so our dependencies never change
  // similar to componentDidMount

  // useEffect calls axios call to display this specific profile by id
  // using props.something to call since props was passed as an argumment
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      // Make sure to update this.setState to our hooks function
      // no need to use key word this.something with hooks
      .then(res => setProfile(res.data.profile))
      .catch()
  }, [])

  // axios call for Delete this const is called inside the delete button
  const destroy = () => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
    // sets setDeleted useState from false to true
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
  // if the profile does not exist, will display loading on the page
  if (!profile) {
    return <Img
      style={{ width: '50px',
        height: '100%',
        marginTop: '10px',
        textAlign: 'center',
        marginBottom: '10px'
      }}
      placeholder={spinImg}
      alt='Loading'
    />
  }
  // returns to all profiles if the current profile is deleted
  if (deleted) {
    return <Redirect to={
      { pathname: '/profiles' }
    } />
  }
  // return profile owned by used with delete and edit option
  if (profile.owner === props.user._id) {
    return (
      <div>
        {/* SideCandidate display here as a styled div, using styled components
          */}
        <SideCandidate>
          <Name>{profile.name}</Name>
          <Title>{profile.title}</Title>
          <div>
            {/* Img from react-cool-image set a default image to be displayed
            in case there is no image on the database or if the image is
            loading, default image, or hold image is passed inside of
            the placeholder and altered by src, defalut image imported from
            the images folder */}
            <Img
              style={{ width: '250px',
                height: '100%',
                borderRadius: '5px',
                marginTop: '10px',
                marginBottom: '10px',
                cursor: 'pointer'
              }}
              className='imgmouseover'
              placeholder={defaultImg}
              src={`${profile.profileUrl}`}
              alt='Portrait'
              onClick={handleShow}
            />
            {/* onClick is calling the Modal to show inside of the image, so
              image is what opend the modal, modal tag represents the modal
              itself, onHide will close the modal with you click on X closeButton, size
              set the size to large */}
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title style={{
                  color: '#00235c',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                Meet {profile.name}, {profile.title}</Modal.Title>
              </Modal.Header>
              {/* Body contains the same image sized to fill the modal */}
              <Modal.Body>
                <Img
                  style={{ width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    marginTop: '10px',
                    marginBottom: '10px' }}
                  placeholder={defaultImg}
                  src={`${profile.profileUrl}`}
                  alt='Portrait'
                />
              </Modal.Body>
              <Modal.Footer>
                {/* modal example used to have a close and save button here on the
                footer which I removed place the content of your choice here */}
              </Modal.Footer>
            </Modal>
          </div>
          {/* under the picture */}
          <Fields><strong>Location: </strong>{profile.location}</Fields>
          <div>
            <SkillTitle><strong>Relevant Skills:</strong></SkillTitle>
            {/* array of skills */}
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
          {/* Contact informtaion, websites and email */}
          <Fields><strong>Email this Candidate:</strong>{' '}
            {/* a tag with href mailto will open email window with profile.
              contact email, if any */}
            <a href={'mailto:' + profile.contact}>{profile.contact}</a>
          </Fields>
          <Fields><strong>Website:</strong>
            {/* 2020 react changes, target="_blank" by itself is decrapitated
            must use rel='noopener noreferrer */}
            <a href={profile.website} target='_blank' rel='noopener noreferrer' >{profile.website}</a></Fields>
          <Fields><strong>Portfolio:</strong> <a href={profile.portfolio}
            target='_blank' rel='noopener noreferrer' >{profile.portfolio}
          </a></Fields>
          <Fields><strong>Other Website:</strong> <a href={profile.other}
            target='_blank' rel='noopener noreferrer' >{profile.other}</a></Fields>
          {/* Delete button calls destroy function */}
          <ButtonS primary onClick={destroy}>Delete Profile</ButtonS> {' '}
          {/* Edit button */}
          <Link to={`/profiles/${props.match.params.id}/edit`}>
            <ButtonS>Edit</ButtonS>
          </Link>
          {/* SpaceLink div gives a space back to all profiles link and buttons */}
          <SpaceLink>
            <Link to="/profiles">Back to all Profiles</Link>
          </SpaceLink>
          {/* End of SideCandidate */}
        </SideCandidate>
        {/* Candidate box starts here */}
        <Candidate>
          <Welcome>Welcome to my profile</Welcome>
          <Fields><strong>Name:</strong> {profile.name}</Fields>
          <Fields><strong>Title:</strong> {profile.title}</Fields>
          <Fields><strong>Education:</strong> {profile.education}</Fields>
          <Description><strong>Description:</strong></Description>
          <Fields>{profile.description}</Fields>
          <div>
            <FieldsBackground><strong>Salary Requirements:</strong>{' '}
              $ {profile.salary}</FieldsBackground>
          </div>
        </Candidate>
        {/* Calling Home file with page footer */}
        <Home />
      </div>
    )
  }
  return (
    <div>
      <SideCandidate>
        <Name>{profile.name}</Name>
        <Title>{profile.title}</Title>
        <div>
          {/* using inline style because this is a set tag from a package */}
          <Img
            style={{ width: '250px',
              height: '100%',
              borderRadius: '5px',
              marginTop: '10px',
              marginBottom: '10px',
              cursor: 'pointer' }}
            className='imgmouseover'
            placeholder={defaultImg}
            src={`${profile.profileUrl}`}
            alt='Portrait'
            onClick={handleShow}
          />
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
          >
            <Modal.Header closeButton>
              {/* using inline style because this is a set tag from a package */}
              <Modal.Title style={{
                color: '#00235c',
                fontWeight: '600',
                textAlign: 'center'
              }}>
              Meet {profile.name}, {profile.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* using inline style because this is a set tag from a package */}
              <Img
                style={{ width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                  marginTop: '10px',
                  marginBottom: '10px' }}
                placeholder={defaultImg}
                src={`${profile.profileUrl}`}
                alt='Portrait'
              />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
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
        <Fields><strong>Website:</strong> <a href={profile.website}
          target='_blank' rel='noopener noreferrer' >{profile.website}</a></Fields>
        <Fields><strong>Portfolio:</strong> <a href={profile.portfolio}
          target='_blank' rel='noopener noreferrer' >{profile.portfolio}
        </a></Fields>
        <Fields><strong>Other Website:</strong> <a href={profile.other}
          target='_blank' rel='noopener noreferrer' >{profile.other}</a></Fields>
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
        <FieldsBackground><strong>Salary Requirements:</strong>{' '}
          $ {profile.salary}</FieldsBackground>
      </Candidate>
      <Home />
    </div>
  )
}

export default Profile
