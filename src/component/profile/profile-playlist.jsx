import React from "react";

function Playlist({headerName}) {
    return (
        <div>
            <div className="profile-container-playList">
                <div>
                    <div>
                        <div>{headerName}</div>
                        <a href="#">แก้ไข</a>
                    </div>
                    <div>+</div>
                </div>
                <div>
                    <div>
                        <img src="#"/>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Playlist;