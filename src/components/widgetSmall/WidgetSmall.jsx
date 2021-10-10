import { Visibility } from '@mui/icons-material';
import React from 'react';

import anna from '../../assets/anna.jpg';
import pat from '../../assets/pat.jpg';
import albert from '../../assets/albert.jpg';
import kriss from '../../assets/kriss.jpg';
import sam from '../../assets/sam.jpg';

import './WidgetSmall.css'

function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">Newest Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={anna} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility />&nbsp;
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={pat} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Patrick Chen</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility />&nbsp;
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={albert} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Albert Mahome</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility />&nbsp;
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={kriss} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Kriss Campbell</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility />&nbsp;
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={sam} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Sam Williams</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility />&nbsp;
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
