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

const UpdateForm = ({ profile, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Updating Profile:</h3>
      <Form onSubmit={handleSubmit}>
        <SpaceDiv>
          <Form.Group controlId="file" encType="multipart/form-data">
            <Form.Label>Upload A Profile Picture</Form.Label>
            <Form.Control
              type="file"
              defaultValue={profile.profileUrl}
              name="file"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your name here"
              defaultValue={profile.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Software Engineer"
              defaultValue={profile.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Education information here"
              defaultValue={profile.education}
              name="education"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Where are you located?"
              defaultValue={profile.location}
              name="location"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="How much are you looking for?"
              defaultValue={profile.salary}
              name="salary"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Contact Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              // mailto={profile.contact}
              defaultValue={profile.contact}
              name="contact"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Webpage (not required)"
              defaultValue={profile.website}
              name="website"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="portfolio">
            <Form.Label>Portfolio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. GitHub (not required)"
              defaultValue={profile.portfolio}
              name="portfolio"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="other">
            <Form.Label>Other Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. LinkedIn (not required)"
              defaultValue={profile.other}
              name="other"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <textarea
              required
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
