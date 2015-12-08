this.HomeFreeController = RouteController.extend({
	template: "HomeFree",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("loading"); }
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("notes_empty"),
			Meteor.subscribe("notes")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		return {
			params: this.params || {},
			notes_empty: Notes.findOne({_id:null}, {}),
			notes: Notes.find({}, {sort:{createdAt:-1}})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
		
	}
});