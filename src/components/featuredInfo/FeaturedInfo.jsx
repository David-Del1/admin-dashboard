import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react';

import './FeaturedInfo.css';

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,500</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6,800</span>
          <span className="featuredMoneyRate">
            -1.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,980</span>
          <span className="featuredMoneyRate">
            2.7
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
