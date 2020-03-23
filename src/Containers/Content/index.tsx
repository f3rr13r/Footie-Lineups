import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {getPlayerDetail} from '../../Actions/GetPlayerDetail';
import Fixture from '../../Components/Fixture';
import FixtureModel from '../../Models/fixture';

import './Content.scss';

type ContentProps = {
    onClick: (id: string) => void,
    fixture: FixtureModel
}

class ContentView extends PureComponent<ContentProps, {}> {

    render() {
        const {fixture, onClick} = this.props;
        return (
        <div className="fixture container">
            //@ts-ignore
            <Fixture fixture={fixture} onClick={onClick}/>
        </div>)
    }
}


//@ts-ignore
const mapStateToProps = (state) => ({
        pending: state.fixtureReducer.pending,
        fixture: state.fixtureReducer.fixture,
        error: state.fixtureReducer.error,
      })



const mapDispatchToProps = (dispatch: any) => ({
      onClick: (id: string) => {
        dispatch(getPlayerDetail(id))
      }
  })

export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(ContentView);