Notes.allow({
	insert: function (userId, doc) {
		return Notes.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Notes.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Notes.userCanRemove(userId, doc);
	}
});

Notes.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
doc.name = Meteor.user() ? Meteor.user().profile.name : 'Anonymous'; return doc;
});

Notes.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Notes.before.remove(function(userId, doc) {
	
});

Notes.after.insert(function(userId, doc) {
	
});

Notes.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Notes.after.remove(function(userId, doc) {
	
});
