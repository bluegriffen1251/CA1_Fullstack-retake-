import React from "react";

function TeamMemberCardComponent({Name,Job}){
    return(
        <div className="border rounded">
            <h2>Name:</h2>
            <h2>{Name}</h2>
            <h2>Job Title:</h2>
            <h2>{Job}</h2>
        </div>
    )
}

export default TeamMemberCardComponent