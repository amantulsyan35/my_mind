import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Library from './Library';
import LibraryList from './LibraryList';
import NewLibraryForm from './NewLibraryForm';
import seedContent from './seedContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedLibraries = JSON.parse(window.localStorage.getItem('libraries'));
    this.state = {
      contents: savedLibraries || seedContent,
    };
    this.saveLibrary = this.saveLibrary.bind(this);
    this.findLibrary = this.findLibrary.bind(this);
    this.deleteLibrary = this.deleteLibrary.bind(this);
  }

  //searching for the library
  findLibrary = (id) => {
    return this.state.contents.find((content) => {
      return content.id === id;
    });
  };

  //save library
  saveLibrary = (newLibrary) => {
    // console.log(newLibrary);
    this.setState(
      { contents: [...this.state.contents, newLibrary] },
      this.syncLocalStorage
    );
  };

  // saving to local storage
  syncLocalStorage = () => {
    window.localStorage.setItem(
      'libraries',
      JSON.stringify(this.state.contents)
    );
  };

  //deleting library
  deleteLibrary = (id) => {
    this.setState(
      (st) => ({
        contents: st.contents.filter((s) => s.id !== id),
      }),
      this.syncLocalStorage
    );
  };

  render() {
    const { contents } = this.state;
    return (
      <Switch>
        <Route
          exact
          path='/library/new'
          render={(routeProps) => (
            <NewLibraryForm
              saveLibrary={this.saveLibrary}
              {...routeProps}
              contents={this.state.contents}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <LibraryList
              libraries={contents}
              {...routeProps}
              deleteLibrary={this.deleteLibrary}
            />
          )}
        />
        <Route
          exact
          path='/library/:id'
          render={(routeProps) => (
            <Library library={this.findLibrary(routeProps.match.params.id)} />
          )}
        />
        <Route
          render={(routeProps) => (
            <LibraryList
              libraries={contents}
              {...routeProps}
              deleteLibrary={this.deleteLibrary}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
