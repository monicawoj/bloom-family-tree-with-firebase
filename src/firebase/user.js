import { auth } from './firebase';

const user = auth.currentUser;

// Sign Up
export const doUpdateProfile = (username) => {
  return user.updateProfile({
      displayName: username,
  }).then(function() {
      // Update successful.
      console.log(username);
      console.log(user);
  }).catch(function(error) {
      // An error happened.
  });
};

// Send verification email
export const doSendEmailVerification = () => {
    user.sendEmailVerification().then(function() {
        // Email sent.
    }).catch(function(error) {
        // An error happened.
    });
};

// Send password reset email
export const doSendPasswordResetEmail = (emailAddress) => {
    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
    }).catch(function(error) {
        // An error happened.
    });

};

// Set user password
export const doUpdatePassword = (newPassword) => {
    user.updatePassword(newPassword).then(function() {
        // Update successful.
    }).catch(function(error) {
        // An error happened.
    });
};