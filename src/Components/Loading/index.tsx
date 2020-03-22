import React from 'react';

import './Loading.scss';

import footballBoot from '../../Assets/football-boot.png';
import football from '../../Assets/football.png';

const Loading =() =>
    <div className="loading">
        <img className="football" src={football} alt="football" />
        <img className="boot" src={footballBoot} alt="football-boot" />
    </div>
;
export default Loading;