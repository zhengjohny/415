Template.HomePrivate.rendered = function() {
	
};

Template.HomePrivate.events({
	
});

Template.HomePrivate.helpers({
	
});

Template.HomePrivateHomeJumbotron.rendered = function() {
	
};

Template.HomePrivateHomeJumbotron.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("kitties_private", {});
	}
	
});

Template.HomePrivateHomeJumbotron.helpers({
	
});
