import { Chat, Clear, People } from "@material-ui/icons";
import React from "react";
import "./styles.css";

const Details = ({ participants, participant }) => {
  const totalParticipants = participants?.length + 1;

  console.log(participants);

  return (
    <div className="details">
      <div className="details_header">
        <h1>Meeting Details</h1>
        <Clear />
      </div>

      <div className="details_tabs">
        <div className="deatils_activebar"></div>
        <div className="details_tab deatils_tab--active">
          <People />
          <p>People ({totalParticipants})</p>
        </div>

        <div className="details_tab ">
          <Chat />
          <p>Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
