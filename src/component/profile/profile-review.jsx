import React from "react";

function Review({name}) {
    return (
        <div>
            <div className="profile-review-box">
                <div className="profile-review-box-header">
                    <div>{name}</div>
                    <div>star rate</div>
                </div>
                <div className="profile-review-box-massage">
                    <div>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</div>
                </div>
                <div className="profile-review-box-edit">
                    <a href="#">แก้ไข</a>
                </div>
            </div>
        </div>
    )
}

export default Review;