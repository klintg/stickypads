var React = require('react')
var AppActions = require('../actions/AppActions')
var AppStore =require('../stores/AppStore')

var AddNoteForm = React.createClass({
  render: function() {
    return (
      <div>
        <h5>Add Note Form</h5>
        <form onSubmit= {this.onSubmit}>
          <div className="row">
            <label>Note Text
              <input type="text" ref="text" placeholder="Enter Text ..." />
            </label>
            <button className="button">Add </button>
          </div>
        </form>
      </div>
    )
  },

  onSubmit: function(e){
    e.preventDefault()
    var note = {
      text: this.refs.text.value.trim()
    }
    //add an action
    AppActions.addNote(note);
  }
})

module.exports = AddNoteForm
