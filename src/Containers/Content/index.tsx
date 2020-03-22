import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import attemptToGetFixture from '../../ApiMethods/getFixture';

class ContentView extends PureComponent {

    componentWillMount() {
        attemptToGetFixture();
    }

    render() {
        return <p>We have data</p>
    }
}

const mapStateToProps = () => {
    return {
      fixture: attemptToGetFixture()
    }
  }

const mapDispatchToProps = (dispatch: any) => {
    return {
      onClick: () => {
        dispatch(attemptToGetFixture)
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);