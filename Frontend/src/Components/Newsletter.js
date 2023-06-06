import React from "react";
import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
  return (
    <div className="newletter-container">
      <div className="headline">
        <h1 style={{fontWeight:"700"}}>Newletter</h1>
      </div>
      <div className="news-desc">
        <h2 style={{fontWeight:"400"}}>Don't miss out any updates from your favourite brands. Subscribe now !</h2>
      </div>
      <div className="news-input-box">
        <input placeholder="Enter your E-Mail"/><SendIcon/>
      </div>
    </div>
  );
};

export default Newsletter;
