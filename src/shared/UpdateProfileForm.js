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
  color: #d1941b;
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

const UpdateForm = ({ profile, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Update>Updating Profile:</Update>
      <Form onSubmit={handleSubmit}>
        <SpaceDiv>
          <UploadPreview
            defaultValue={profile.profileUrl}
            name="file"
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
                Education</Form.Label>
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
                  placeholder="Email"
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
                Website</Form.Label>
                <Form.Control
                  type="text"
                  style={{ fontStyle: 'italic' }}
                  placeholder="Your Webpage (not required)"
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
                Portfolio</Form.Label>
                <Form.Control
                  type="text"
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
                Other Website</Form.Label>
                <Form.Control
                  type="text"
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
              placeholder="How much are you looking for?"
              defaultValue={profile.salary}
              name="salary"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
            Skills</Form.Label>
            <textarea
              required
              style={{ fontStyle: 'italic' }}
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="2"
              maxLength={100}
              value={profile.skills}
              name="skills"
              type="text"
              placeholder="Relevant Skills (separated by comma)"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label style={{ fontWeight: '600', color: '#00235c' }}>
            Description</Form.Label>
            <textarea
              required
              style={{ fontStyle: 'italic' }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="31"
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
