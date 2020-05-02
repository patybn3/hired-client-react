// this file uses Reach Hooks

import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// calls create form form ProfileForm.js
import ProfileForm from '../../shared/ProfileForm'
import messages from '../AutoDismissAlert/messages'

const ProfileCreate = props => {
  // pass fields as empty strings, and array as array
  const [profile, setProfile] = useState(
    { file: '',
      name: '',
      title: '',
      education: '',
      description: '',
      location: '',
      skills: [],
      salary: '',
      contact: '',
      website: '',
      portfolio: '',
      other: ''
    })
  const [createdProfileId, setCreatedProfileId] = useState(null)

  // this function handles changes
  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedProfile = Object.assign({ ...profile }, updatedField)
    setProfile(editedProfile)
    // event.persist()
    // setProfile(profile => ({ ...profile, [event.target.name]: event.target.value }))
  }
  // on submit of the button, form uses FormData, to use FormData create new
  // form data and pass the event.target. use this const and the axios call data
  // contentType and processData MUST BE PASSED AS FALSE
  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    axios({
      url: `${apiUrl}/profiles`,
      method: 'POST',
      contentType: false,
      processData: false,
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: formData
    })
      // remember, while using mongoDB to pass the id for create as _id
      .then(res => setCreatedProfileId(res.data.profile._id))
      .then(() => props.msgAlert({ // remove the props param from the .then()
        heading: 'Create Profile Success',
        message: messages.createProfileSuccess,
        variant: 'success'
      }))
      .catch(() => {
        props.msgAlert({
          heading: 'Create Profile Failed',
          message: messages.createFailure,
          variant: 'danger'
        })
      })
  }

  if (createdProfileId) {
    return <Redirect to={`/profiles/${createdProfileId}`} />
  }

  return (
    <div>
      {/* calls profile form from outside file and sets the above functions
      to complete submissions and changes, cancel path will send you back to the
      profiles list */}
      <ProfileForm
        profile={profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/profiles"
      />
    </div>
  )
}

export default ProfileCreate
