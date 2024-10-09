import React from "react";
import Movieposter from "../movieposter";

function Createplaylist() {
    return (
        <div>
            <h1>Create Playlist</h1>
            <div>
                <div>search bar</div>
                <div>playlist box
                    <div>
                        <span>รูปโปรไฟล์</span>
                        <div>ชื่อ</div>
                    </div>
                    <div>ชื่อเพลลิสต์ : หนังน่าดูวันคริสมาสต์</div>
                    <div>25/09/67 13.30 น.</div>
                    <div className="Movie-Container">
                        <Movieposter/>
                        <Movieposter/>
                        <Movieposter/>
                        <Movieposter/>
                    </div>
                    <div>
                        <button>สร้างเพลลิสต์</button>
                    </div>
                </div>
                <div className="Movie-Container">
                    <Movieposter/>
                    <Movieposter/>
                    <Movieposter/>
                    <Movieposter/>
                </div>
            </div>
        </div>
    )
}

export default Createplaylist;