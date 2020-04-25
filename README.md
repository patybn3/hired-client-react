# Hired

Hired is a Full Stack project in which this is the front-end repository. To check the back-end repository which is built on a Express API click [HERE](https://github.com/patybn3/hired-api). This application used Heroku for version control which can be accessed [HERE](https://sleepy-coast-97158.herokuapp.com/) . The vision behind this application is to build a virtual "meet an hire" where an employer, or authenticated user can look for candidates. The first version of this app simply displays a list of the candidates. Second version will include pictures (app is already set up for AWS), posts and likes and the third version will allow a user to search for key words.

## Template

A front-end framework template for starting projects with a recent version of
either the [Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template)
or the [Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).

## Installation

1. [Download](../../archive/master.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/react-auth-template-master.zip`).
1. Move into the new project and `git init`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace `react-auth-template` in `package.json` with your
   projects name.
1. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
1. Install dependencies with `npm install`.
1. `git add` and `git commit` your changes.
1. Run the development server with `npm start`.

## Deployment

Before deploying, you first need to make sure the `homepage` key in your
`package.json` is pointing to the correct value. It should be the url of your
deployed application ex. (patybn3.github.io).

To deploy you should first make sure you are on the `master` branch with a
clean working directory, then you can run `npm run deploy` and wait to see if
it runs successfully.

## Other dependencies

This project used Styled Components CSS for styling. To install styled components:
1. `npm install styled-components` - You might see the following message:
  - `npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.

  + styled-components@5.0.1
  added 19 packages from 14 contributors in 7.38s`
2. In this case, install the following dependencies:
  - `npm install --save bootstrap`
  - `npm install jquery@1.9.1`
  - `npm install popper.js --save`
3. Run Styled Component again: `npm install styled-components`
  - Please note, Styled Components was used with all non pre styled tags. Inline styling was used with any pre styled tag (by a package, like bootstrap, for example).

4. The following package was installed to facilitate the styling of this page's footer: `npm install react-sticky-footer --save`
5.  Smooth Scroll feature was added with the following package:
  - `npm i react-scroll-to --save`
6 - React Cool Image was used to display an no photo image for the candidates that did not add a photo:
  - `npm install --save react-cool-img`


## Requirements

Use the technologies of your choice for this project. The front and the back-end of this application are to be built individually. Both front-end and back-end are to be store in a public GitHub account. The back-end of the web application also uses Heroku as the server. Changes made are to be commited and deployed often to both GitHub and Heroku to keep the records up to date. Application must be functional and follow the following MVP specifications:

Version Control Demonstrate using version control by:

Sharing your work through a git repository hosted on Github. Making frequent, cohesive commits dating back to the first day of the project week. 1 commit on the first day of project week on both repos. At least 1 commit every day during project week (not necessarily on both repos).

Signup with email, password, and password confirmation. Login with email and password. Logout when logged in. Change password with current and new password. Signup and Signin must only be available to not signed in users. Logout and Change password must only be available to signed in users. Give feedback to the user after each action's success or failure. All forms must clear after submit success and user sign-out (Optional) Reset form to initial state on failure Client Specifications Use a front-end Javascript app to communicate with your API (both read and write) and render data that it receives in the browser.
Create a joint table for a resource and allow the user to create, edit and delete resources.

Your app must not:

Rely on refreshing the page for any functionality. Have any user-facing bugs. Display non-functional buttons, nor buttons that do not successfully complete a task. Show actions at inappropriate times (example: change password form when a user is not signed in). Forms not clearing at appropriate times (example: sign up form not clearing after success). Use alerts for anything. Display errors or warnings in the console. Display debugging messages in the console.

## Technologies:

 - HTML5
 - CSS3
 - React.js
 - Javascript
 - Styled components
 - GitHub
 - Git
 - Heroku
 - Axios API calls

## Planning

### User Stories

1. Vesion 1:
  - As a user I would like to be able to sign up
  - As a user I would like to be able to sign in
  - As a user I would like to be able to change my password
  - As a user I would like to be able to select if I am a candidate or an employer
  - As a user I would like to be able to log out
  - As a user I would like to be have my own profile
  - As a user I would like to be to share a profile picture
  - As a user I would like to be able to edit my profile
  - As a user I would like to be able delete my profile
  - As a user I would like to be able create my profile
  - As a user I would like to be able to add my contact information

2. Version 2:
  - As a user I would like to be able to have a contact form
  - As a user I would like to be able to see who contacted me
  - As a user I would like to be able to create posts
  - As a user I would like to be able to like posts and have my posts liked
  - As a user I would like to be able to comment on my posts and other post

### Schedule

the following schedule was followed:

Set Up
API

 Download Express API Template or Download Rails API Template
 Create a Github Repository
 Deploy to Heroku with Express or Deploy to Heroku with Rails
Client

 Download Browser Template or Download React Auth Template
 Create a Github Repository
 Deploy to Github Pages with Browser Template or Deploy to Github Pages with React Auth Template
API
 Review express-api or rails-api
 Create your resource and end points
 Test your resource's end points with curl scripts
 Add the relationship to a User
 Add User ownership to resource controller
Client
 Review jquery-ajax-token-auth or react-auth
 Sign Up (curl then web app)
 Sign In (curl then web app)
 Change Password (curl then web app)
 Sign Out (curl then web page)
 All API calls have success or failure messages
 Review jquery-ajax-crud or react-crud
 Create resource (curl then web app)
 Get all of their owned resources (curl then web app)
 Delete single resource (curl then web app)
 Update single resource (curl then web app)
Final Touches
 README
 Troubleshoot/Debug
 Style

## Wireframes

<img width="826" alt="Screen Shot 2020-03-27 at 9 28 46 AM" src="https://user-images.githubusercontent.com/59259041/78316392-8c892e00-752d-11ea-920c-bde8584ed45e.png">
<img width="826" alt="Screen Shot 2020-03-27 at 9 34 16 AM" src="https://user-images.githubusercontent.com/59259041/78316402-94e16900-752d-11ea-96c3-ee72333ab640.png">
<img width="823" alt="Screen Shot 2020-03-27 at 9 48 45 AM" src="https://user-images.githubusercontent.com/59259041/78316421-9ca10d80-752d-11ea-9062-14c83e7e1260.png">

## Unresolved problems and goals
The goal is to achieve the second and third versions of this app.
