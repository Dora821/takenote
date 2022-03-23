import React from 'react';
import axios from 'axios';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: [],
      hiddenNotes: [],
      notesToRender: [],
      titleClicked: false
    };
    // this.getAllNotes = this.getAllNotes.bind(this);
    // this.pageRouter = this.pageRouter.bind(this);
    this.changePage = this.changePage.bind(this);
    this.selectNote = this.selectNote.bind(this);
    // this.addToHidden = this.addToHidden.bind(this);
  }

  componentDidMount() {
    console.log('page loading');
    this.getAllNotes();
  }

  changePage(page){
    this.setState({
      page: page
    })
  }

  selectNote(note) {
    console.log('body clicked');
    this.setState({notesToRender:[note]});
  }

  // addToHidden(note) {
  //   this.setState({hiddenNotes:[...this.state.hiddenNotes, note]});
  // }
  // pageRouter(){
  //   if(this.state.page === 'list'){
  //     console.log('pageRouter works')
  //     return this.state.notes.map(notes => <Notes notes={notes}/>)
  //   } else if (this.state.page === 'newNote'){
  //     return <AddNote/>
  //   }
  // }

  getAllNotes() {
    axios.get('/api/notes')
      .then((res)=> this.setState({notes: res.data, notesToRender: res.data}))
      .catch((error)=> console.log('error received from server', error))
  }

  render(){
    const isList = (this.state.page === 'list');
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('list')}}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {isList
          ? this.state.notesToRender.map(notes=><Notes notes={notes} selectNote={this.selectNote}/>)
          : <AddNote />}
        </div>

      </div>
    )
  }
}

export default App;
