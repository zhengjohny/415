Template.Kitties.rendered = function() {
	
};

Template.Kitties.events({
	
});

Template.Kitties.helpers({
	
});

Template.KittiesGallery.events({
	"click .new-file": function(e, t) {
		Router.go("kitties.insert");
	},
});

Template.KittiesGallery.helpers({
});