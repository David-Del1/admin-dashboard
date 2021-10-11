import React from 'react';

import './User.css';

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/52fc05c9e4b08fc45bd99090/1563302834562-M0WSL1SOJKQ81KHSR2LR/got-emmy-nom-2019-1920+%281%29.jpg?format=2500w" 
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Sansa Stark</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}

export default User;
