var AppActions = require('../actions/AppActions');

module.exports = {
		addNote: function(note) {
			$.ajax({
				url: "https://api.mlab.com/api/1/databases/stickysituation/collections/notes?apiKey=BEXYPcRw70QawjS0RjlRD925s8A151x3",
				data: JSON.stringify(note),
				type: "POST",
				contentType: "application/json"
			});
		},

		getNotes: function() {
			$.ajax({
				url: "https://api.mlab.com/api/1/databases/stickysituation/collections/notes?apiKey=BEXYPcRw70QawjS0RjlRD925s8A151x3",
				dataType: 'json',
				cache: false,
				success: function(data) {
					console.log(data)
					AppActions.recieveNotes(data);
				}.bind(this),
				error: function(xhr, status, err) {
					console.log(err)
				}.bind(this)
			});
		},

		removeNote: function(noteId) {
			$.ajax({
				url: "https://api.mlab.com/api/1/databases/stickysituation/collections/notes/"+noteId+"?apiKey=BEXYPcRw70QawjS0RjlRD925s8A151x3",
				type: "DELETE",
				async: true,
				timeout: 300000,
				success: function(data )  {
					console.log("Note deleted")
				}.bind(this),
				error: function (xhr, status, err) {
					console.log(err)
				}.bind(this)
			});
		}
}
