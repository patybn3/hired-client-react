// import config file that contains Heroku URL with BackEnd code
import apiUrl from '../apiConfig'
// import axios for axios calls
import axios from 'axios'

// this file hold the axio calls for signIn, signUp, logout and change passowrd
// only, all other axios calls are stored inside of the files it belongs to
// Since react provides the ability of maintaining all your code in the same
// file, I believe it makes more sense to keep it that way but a new file for
// Profile axios calls can be created if needed

// same concept as a ajax call on jQuery, return axios inside of a function,
// export the function within the function or at the bottom of the page
// I believe data can be passed as data (did not try) but I decided to follow the instructions
// leaving the data specific to what it is, this way we will know in the future
// what data is referring to
export const signUp = credentials => {
  return axios({
    method: 'POST',
    // url calls config file that was imported above adding the singup extention
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
