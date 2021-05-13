import React from "react";
import ProfilePhoto from '../../Utils/Icons/ProfilePhoto.PNG'; 


const ProfileInfo = () => {


  return (
    <div>
      <div className="ProfileImg">
        <img
          src={ProfilePhoto}
          id="Profile-img"
          height="38em"
          width="38em"
          alt="Profile Pic"
        ></img>
      </div>
      <div className="ProfileInfo">
        <div className="Name">Pavan Rao J</div>
      </div>
    </div>
  );
};
export default ProfileInfo;
