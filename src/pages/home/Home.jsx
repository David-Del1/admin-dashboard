import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';

import userData from '../../dummyData.js';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart 
        data={userData} 
        title="Active User Data" 
        dataKey="ActiveUsers" 
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
