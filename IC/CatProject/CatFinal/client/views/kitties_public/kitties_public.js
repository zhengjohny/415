Template.KittiesPublic.rendered = function() {
	
};

Template.KittiesPublic.events({
	
});

Template.KittiesPublic.helpers({
	
});

Template.KittiesPublicGallery.events({
	"click .new-file": function(e, t) {
		Router.go("kitties_public.insert");
	},
});

Template.KittiesPublicGallery.helpers({
});