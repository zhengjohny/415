this.Notes = new Mongo.Collection("notes");

this.Notes.userCanInsert = function(userId, doc) {
	return true;
}

this.Notes.userCanUpdate = function(userId, doc) {
	return userId && doc.createdBy == userId;
}

this.Notes.userCanRemove = function(userId, doc) {
	return userId && doc.createdBy == userId;
}
