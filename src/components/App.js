import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HeaderSmart from './header/HeaderSmart';
import About from './about/About';
import AllRecordsSmart from './allRecords/AllRecordsSmart';
import Record from './record/Record';
import EditSingleRecordForm from './editSingleRecord/EditSingleRecordSmart';
import { getRecords } from '../actions/records';

class App extends React.Component {
  componentDidMount() {
    this.props.loadRecords();
  }

  render() {
    return (
      <Router>
        <HeaderSmart />
        <main>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/records/single/:id" exact component={Record} />
            <Route
              path="/records/single/:id/edit"
              exact
              component={EditSingleRecordForm}
            />
            <Route exact path="/records/:pageNumber" component={AllRecordsSmart} />
          </Switch>
        </main>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadRecords: () => {
    const action = getRecords(1);
    dispatch(action);
  },
});

export default hot(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
