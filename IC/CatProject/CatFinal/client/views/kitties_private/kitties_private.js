Template.KittiesPrivate.rendered = function() {
	
};

Template.KittiesPrivate.events({
	
});

Template.KittiesPrivate.helpers({
	
});

Template.KittiesPrivateGallery.events({
	"click .new-file": function(e, t) {
		Router.go("kitties_private.insert");
	},
});

Template.KittiesPrivateGallery.helpers({
});