import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {

    
const logout=()=> {
  localStorage.removeItem("username");
  window.location.reload();
}


  return (
    <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span onClick={logout}>LOG IN/OUT</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar;