import React from 'react';
import Note from './NoteView.jsx';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {titleClicked: false, hidden: false};
    this.titleClicker = this.titleClicker.bind(this);
    this.addToHidden = this.addToHidden.bind(this);
  }

  titleClicker() {
    this.setState({titleClicked: !this.state.titleClicked})
  }

  addToHidden() {
    this.setState({hidden: true});
  }

  render() {
    return (
      <div>
        <h1>My Notes</h1>
        <div className="notes-list">
            <div className="note">
              <div className="note-title" onClick={this.titleClicker}><h3>{this.props.notes.title}</h3></div>
              <div className="note-category"><h4>{this.props.notes.category}</h4></div>
              <div className="note-desc" onClick={()=>this.props.selectNote(this.props.notes)}>{this.props.notes.note}</div>
              <div>{this.state.titleClicked && <Note eachNote = {this.props.notes}/>}</div>
              <button onClick={this.addToHidden}>Hidden</button>
            </div>
        </div>
      </div>
    )
  }

}

export default Notes;