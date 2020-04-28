import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import UpdateProfileForm from '../../shared/UpdateProfileForm'
import messages from '../AutoDismissAlert/messages'

const ProfileEdit = props => {
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
  const [updated, setUpdate] = useState(false)

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
      // .then(res => setProfile(res.data.profile))
      .catch(() => {
        props.msgAlert({
          heading: 'Update Profile Failed',
          message: messages.updateFailure,
          variant: 'danger'
        })
      })
  }, [])

  const handleChange = event => {
    const upgradedField = { [event.target.name]: event.target.value }
    // //
    const editedProfile = Object.assign({ ...profile }, upgradedField)
    setProfile(editedProfile)
    // event.persist()
    // setProfile(profile => ({ ...profile, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'PATCH',
      contentType: false,
      processData: false,
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: formData
    })
      .then(res => {
        setUpdate(true)
        props.msgAlert({ // remove the props param from the .then()
          heading: 'Update Profile Success',
          message: messages.updateProfileSuccess,
          variant: 'success'
        })
      })
      .catch(() => {
        props.msgAlert({
          heading: 'Update Profile Failed',
          message: messages.updateFailure,
          variant: 'danger'
        })
      })
  }
  //
  // const { movie, updated } = this.state
  // const { handleChange, handleSubmit } = this
  if (updated) {
    return <Redirect to={`/profiles/${props.match.params.id}`} />
  }

  return (
    <div>
      <UpdateProfileForm
        profile={profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/profiles/${props.match.params.id}`}
      />
    </div>
  )
}

export default ProfileEdit
