import React from 'react';

import './AnimatedLogo.scss';

import footballBoot from '../../Assets/football-boot.png';
import football from '../../Assets/football.png';

const AnimatedLogo =() =>
    <div className="animated-logo">
        <img className="football" src={football} alt="football" />
        <img className="boot" src={footballBoot} alt="football-boot" />
    </div>
;
export default AnimatedLogo;