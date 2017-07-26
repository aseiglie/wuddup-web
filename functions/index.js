const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createUser = functions.auth.user().onCreate(function (event) {

  return createUser(event.data);

});

const createUser = (_data) => {

  console.log('Creating user');

  const user = {
    uid: _data.uid,
    username: _data.displayName,
    img: _data.photoURL,
    email: _data.email
  }

  return admin.database().ref(`/users/${user.uid}`).set(user);

}
