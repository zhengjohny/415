/**
 * Created by johny on 11/25/2015.
 */
if (Meteor.isClient) {
  // This code only runs on the client
  Template.cats.helpers({
    /*tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]*/
  });

  Template.cats.events({

  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}