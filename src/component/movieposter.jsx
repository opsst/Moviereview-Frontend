import React from "react";

function Movieposter({moviename, moviepic}) {
    return (
        <div>
            <div className='Movie-List' style={{ backgroundImage: `url(${moviepic})`}}>
                    <div className='Movie-List-Name'>{moviename}</div>
                    <div className='Movie-List-Date'>20 April</div>
                    <div className='Movie-List-Age'>6+</div>
                    <div className='Movie-List-Lang'>
                        <div>TH</div>
                        <div>EN</div>
                    </div>
                </div>
        </div>
    )
}

export default Movieposter;