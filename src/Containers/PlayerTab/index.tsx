import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {getPlayerDetail} from '../../Actions/GetPlayerDetail';
import PlayerDetailModel from '../../Models/playerInfo';

type ContentProps = {
    onClick: (id: string) => void,
    player: PlayerDetailModel
}

class PlayerTabView extends PureComponent<ContentProps, {}> {

    render() {
        const {player, onClick} = this.props;
        return (
            player && (
<div>
    Some info here
                  
                  </div>
            )
        )
    }
}


//@ts-ignore
const mapStateToProps = (state) => ({
    
        player: state.playerDetailReducer.playerDetail,
      })



const mapDispatchToProps = (dispatch: any) => ({
      onClick: (id: string) => {
        dispatch(getPlayerDetail(id))
      }
  })

export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(PlayerTabView);