import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Form from 'react-bootstrap/Form'
import Home from '../components/routes/Home'
// import Img from 'react-cool-img'
// import defaultImg from '../components/routes/images/addI.png'

const Button = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 5px 20px;
  margin: 20px 0 70px;
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
      padding: 5px 35px;
    `};

    ${props =>
    props.remove &&
      css`
        margin: 10px 0 70px;
      `};
`

const SpaceDiv = styled.div`
  margin-bottom: 100px;
`

const Create = styled.h3`
  font-weight: 600;
  color: #00235c;
  margin-bottom: 40px;
  text-align: center;
`

const Upload = styled.label`
  color: #00235c;
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 5px 20px;
  margin: 10px 0 5px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
background: #00235c;
color: #fff;
cursor: pointer;
}
`

const PreviewImg = styled.img`
  width: 350px;
  height: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
`

const Field = styled.h6`
  font-style: italic;
  color: grey;
  font-weight: 400;
  display: inline-block;
`

class UploadPreview extends React.Component {
  constructor (props) {
    super(props)
    this.state = { file: null }
    this.onChange = this.onChange.bind(this)
    this.resetFile = this.resetFile.bind(this)
  }
  onChange (event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  resetFile (event) {
    event.preventDefault()
    this.setState({ file: null })
  }
  render () {
    return (
      <div className= 'input-group'>
        <Form.Group encType="multipart/form-data">
          <div className='custom-file'>
            <Form.Label style={{
              fontWeight: '600',
              color: '#00235c'
            }}>Upload A Profile Picture</Form.Label>{ ' ' }
            <Upload className="custom-file-lable" htmlFor="inputGroupFile01">
          Choose file
            </Upload>
            { ' ' }
            {this.state.file && (
              <div style={{ textAlign: 'right', marginRight: '20px' }}>
                <Button remove onClick={this.resetFile}>Remove File</Button>
              </div>
            )}
            <Form.Control
              required
              type="file"
              className='custom-file-input'
              style={{ background: 'transparent' }}
              name="file"
              onChange={this.onChange}
              id="inputGroupFile01"
            />
          </div>
        </Form.Group>
        <PreviewImg src={this.state.file} />
      </div>
    )
  }
}

const ProfileForm = ({ profile, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Create>Create a Profile</Create>
      <Form onSubmit={handleSubmit}>
        <SpaceDiv>
          <UploadPreview
            required
            value={profile.profileUrl}
            name="file"
            onChange={handleChange}/>
          <div action="" className="row">
            <div className="col">
              <Form.Group >
                <Form.Label style={{
                  fontWeight: '600',
                  color: '#00235c'
                }}>
                Name</Form.Label>
                <Form.Control
                  required
                  style={{ fontStyle: 'italic' }}
                  placeholder="Enter your name"
                  value={profile.name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label style={{
                  fontWeight: '600',
                  color: '#00235c'
                }}>
                Title</Form.Label>
                <Form.Control
                  required
                  style={{ fontStyle: 'italic' }}
                  placeholder="e.g., Software Engineer"
                  value={profile.title}
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Education <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  style={{ fontStyle: 'italic' }}
                  placeholder="Your Education information here"
                  value={profile.education}
                  name="education"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Location</Form.Label>
                <Form.Control
                  required
                  style={{ fontStyle: 'italic' }}
                  placeholder="Where are you located?"
                  value={profile.location}
                  name="location"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Contact Email</Form.Label>
                <Form.Control
                  required
                  style={{ fontStyle: 'italic' }}
                  placeholder="Email"
                  mailto={profile.contact}
                  value={profile.contact}
                  name="contact"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Website <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  style={{ fontStyle: 'italic' }}
                  placeholder="Your Webpage"
                  value={profile.website}
                  name="website"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Portfolio <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  style={{ fontStyle: 'italic' }}
                  placeholder="e.g., GitHub"
                  value={profile.portfolio}
                  name="portfolio"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Other Website <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  style={{ fontStyle: 'italic' }}
                  placeholder="e.g., LinkedIn"
                  value={profile.other}
                  name="other"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group>
            <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
            Salary</Form.Label>
            <Form.Control
              required
              style={{ fontStyle: 'italic' }}
              placeholder="$ - Desired annual salary"
              value={profile.salary}
              name="salary"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
          Relevant Skills: <Field>(Optional)</Field></Form.Label>
          <div action="" className="row">
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[0]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 1"
                  value={profile.skills[0]}
                  name="skills[0]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[1]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 2"
                  value={profile.skills[1]}
                  name="skills[1]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[2]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 3"
                  value={profile.skills[2]}
                  name="skills[2]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[3]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 4"
                  value={profile.skills[3]}
                  name="skills[3]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[4]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 5"
                  value={profile.skills[4]}
                  name="skills[4]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[5]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 6"
                  value={profile.skills[5]}
                  name="skills[5]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[6]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 7"
                  value={profile.skills[6]}
                  name="skills[6]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[7]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 8"
                  value={profile.skills[7]}
                  name="skills[7]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[8]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 9"
                  value={profile.skills[8]}
                  maxLength={11}
                  name="skills[8]"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Control
                  key={profile.skills[9]}
                  style={{ fontStyle: 'italic' }}
                  placeholder="Skill 10"
                  value={profile.skills[9]}
                  name="skills[9]"
                  maxLength={11}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group controlId="description">
            <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
            Description</Form.Label>
            <textarea
              required
              style={{ fontStyle: 'italic' }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="9"
              maxLength={3000}
              value={profile.description}
              name="description"
              type="text"
              placeholder="About you"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" primary>Submit</Button> {' '}
          <Link to={cancelPath}>
            <Button primary>Cancel</Button>
          </Link>
        </SpaceDiv>
      </Form>
      <Home />
    </div>
  </div>
)

export default ProfileForm
