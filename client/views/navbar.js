Template.navbar.helpers({
  atInfo: function() {
    var user = Meteor.user();
    var signInPath = "/sign-in";

    var text = "";
    var href = "#";
    var tag = "";
    var icon = "sign";

    if (user) {
      text = "Sign Out";
      tag = "signout";
      icon += " out";
    } else {
      href = signInPath;
      text = "Sign In";
      icon += " in";
    }

    return {
      text: text,
      path: href,
      tag: tag,
      icon: icon
    };
  }
});

Template.navbar.events({
  "click .signout": function() {
    AccountsTemplates.logout();
  }
});