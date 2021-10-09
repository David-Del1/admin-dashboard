import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
