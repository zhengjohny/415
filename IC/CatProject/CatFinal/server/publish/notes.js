Meteor.publish("notes", function() {
	return Notes.find({}, {sort:{createdAt:-1}});
});

Meteor.publish("notes_empty", function() {
	return Notes.find({_id:null}, {});
});

