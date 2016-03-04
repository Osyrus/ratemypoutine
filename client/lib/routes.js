FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "splash"});
  }
});