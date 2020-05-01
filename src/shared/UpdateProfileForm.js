import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Form from 'react-bootstrap/Form'
import Home from '../components/routes/Home'

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
`

const SpaceDiv = styled.div`
  margin-bottom: 100px;
`

const Update = styled.h3`
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

// this goes right after <SpaceDiv>

const UpdateForm = ({ profile, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Update>Updating Profile:</Update>
      <Form onSubmit={handleSubmit}>
        <SpaceDiv>
          <UploadPreview
            required
            name="file"
            defaultValue={profile.profileUrl}
            onChange={handleChange}/>
          <div action="" className="row">
            <div className="col">
              <Form.Group controlId="name">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Name</Form.Label>
                <Form.Control
                  required
                  style={{ fontStyle: 'italic' }}
                  type="text"
                  placeholder="Enter your name"
                  defaultValue={profile.name}
                  name="name"
                  maxLength={20}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group controlId="title">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Title</Form.Label>
                <Form.Control
                  required
                  style={{ fontStyle: 'italic' }}
                  type="text"
                  placeholder="e.g., Software Engineer"
                  defaultValue={profile.title}
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group controlId="education">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Education <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  type="text"
                  style={{ fontStyle: 'italic' }}
                  placeholder="Your Education information here"
                  defaultValue={profile.education}
                  name="education"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group controlId="location">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Location</Form.Label>
                <Form.Control
                  type="text"
                  style={{ fontStyle: 'italic' }}
                  placeholder="Where are you located?"
                  defaultValue={profile.location}
                  name="location"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group controlId="contact">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Contact Email</Form.Label>
                <Form.Control
                  type="text"
                  style={{ fontStyle: 'italic' }}
                  placeholder="Your Email here"
                  // mailto={profile.contact}
                  defaultValue={profile.contact}
                  name="contact"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group controlId="website">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Website <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  type="url"
                  style={{ fontStyle: 'italic' }}
                  placeholder="Your Webpage"
                  defaultValue={profile.website}
                  name="website"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div action="" className="row">
            <div className="col">
              <Form.Group controlId="portfolio">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Portfolio <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  type="url"
                  style={{ fontStyle: 'italic' }}
                  placeholder="e.g., GitHub (not required)"
                  defaultValue={profile.portfolio}
                  name="portfolio"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group controlId="other">
                <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
                Other Website <Field>(Optional)</Field></Form.Label>
                <Form.Control
                  type="url"
                  style={{ fontStyle: 'italic' }}
                  placeholder="e.g., LinkedIn (not required)"
                  defaultValue={profile.other}
                  name="other"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group controlId="salary">
            <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
            Salary</Form.Label>
            <Form.Control
              type="text"
              style={{ fontStyle: 'italic' }}
              placeholder="$ - Desired annual salary"
              defaultValue={profile.salary}
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
                  defaultValue={profile.skills[0]}
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
                  defaultValue={profile.skills[1]}
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
                  defaultValue={profile.skills[2]}
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
                  defaultValue={profile.skills[3]}
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
                  defaultValue={profile.skills[4]}
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
                  defaultValue={profile.skills[5]}
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
                  defaultValue={profile.skills[6]}
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
                  defaultValue={profile.skills[7]}
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
                  defaultValue={profile.skills[8]}
                  name="skills[8]"
                  maxLength={11}
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
                  defaultValue={profile.skills[9]}
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

export default UpdateForm
