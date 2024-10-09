import React from "react";
import "./profile.scss"
import Playlist from "./component/profile/profile-playlist";
import Review from "./component/profile/profile-review";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <div className="coverPage-Profile">
                <img src="#" />
            </div>
            <div>
                <img src="#" />
                <div>name</div>
            </div>
            <div>
                <div>followed 1700</div>
                <button>ติดตาม</button>
            </div>
            <div className="profile-container">
                <div className="profile-container-myPlaylist">
                    <div>เพลลิสหนังของฉัน</div>
                    <Link to="/playlist">
                        <button>สร้างเพลลิส</button>
                    </Link>

                </div>
                {/* เพลลิส */}
                <Playlist headerName={"หนังผีไทย"} movieImage={"#"}/>
                <Playlist headerName={"หนังตลก"}/>
                <Playlist headerName={"หนังดราม่า"}/>
            </div>
            <div className="profile-review">
                <h1>รีวิวของฉัน</h1>
                {/* รีวิว */}
                <div className="profile-review-container">
                    <Review name={"พี่มาก..พระขโนง"}/>
                    <Review  name={"หลานม่า"}/>
                    <Review  name={"หลวงพี่เท่ง"}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;