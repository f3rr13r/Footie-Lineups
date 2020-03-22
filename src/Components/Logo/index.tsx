import React from "react";

import './Logo.scss';

import footballBoot from '../../Assets/football-boot.png';

const Logo = () => 
    <div className="logo">
        <img src={footballBoot} alt="Site Logo"/>
        <h1>Fuh-T</h1>
    </div>;
export default Logo;