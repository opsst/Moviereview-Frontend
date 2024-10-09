import React from "react";

function Movieactor({actorname,actorpic}) {
    return (
        <div>
            <div>
                <div>{actorpic}</div>
                <div>{actorname}</div>
            </div>
        </div>
    )
}

export default Movieactor;