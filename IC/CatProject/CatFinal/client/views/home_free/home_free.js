var pageSession = new ReactiveDict();

Template.HomeFree.rendered = function() {
	
};

Template.HomeFree.events({
	
});

Template.HomeFree.helpers({
	
});

var cameraOptions = {
  width: 800,
  height: 600
};


Template.HomeFreePhotoButton.events({
  "click #take-photo": function(e, t) {
    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      Session.set("photo", data);
      if (error) {
        // e.g. camera permission denied, or unsupported browser (Safari on iOS, looking at you)
        console.log(error);
      } else {
        Notes.insert({
          photo: data
        });
      }  
    });
    
  }
});


Template.HomeFreeForm.rendered = function() {
	

	pageSession.set("homeFreeFormInfoMessage", "");
	pageSession.set("homeFreeFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.HomeFreeForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("homeFreeFormInfoMessage", "");
		pageSession.set("homeFreeFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var homeFreeFormMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(homeFreeFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("homeFreeFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("home_free", {});
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("homeFreeFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				newId = Notes.insert(values, function(e) { if(e) errorAction(e); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.HomeFreeForm.helpers({
	"infoMessage": function() {
		return pageSession.get("homeFreeFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("homeFreeFormErrorMessage");
	}
	
});

