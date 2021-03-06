Template.postEdit.events({
	'submit form' : function(e){
		e.preventDefault();

		var currentPostId = this._id;

		var postProperties = {
			url : $(e.target).find('[name=url]').val(),
			title : $(e.target).find('[name=title]').val()
		}
		
		Posts.update(currentPostId, {$set: postProperties}, function(error){
			if (error){
				return throwError(error.reason);
			}

			Router.go('postPage',{_id: currentPostId});
		});

	},
	'click .delete' : function (e) {
		e.preventDefault();

		if (confirm("Delete this post?")){
			Posts.remove(this._id);
			Router.go('postsList');
		}
	}
});