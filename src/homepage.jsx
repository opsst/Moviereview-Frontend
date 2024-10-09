import React from 'react';
import "./homepage.scss"
import { Link } from 'react-router-dom';
import Movieposter from './component/movieposter';

function Homepage() {
    return (
        <div className='container'>
            {/* ปกด้านบน */}
            <div className='coverPage'>
                <div><a href='#'>Today</a></div>
                <div className='movieList'>
                    <div className='movieSelect' style={{ backgroundImage: `url("image/fanday-poster.jpg")`}}>
                        <div>แฟนเดย์<br></br>แฟนกันแค่วันเดียว</div>
                        <Link to="/movieinfo">
                            <button>อ่านรีวิว</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='coverImage'>
                <img src="image/fanday.jpg" alt='fanday'/>
            </div>

            {/* หนังโรง */}
            <div className='Movie'>
                <div>กำลังฉายในโรงภาพยนต์</div>
                <div>เพิ่มเติม<span>รุปลูกศร</span></div>
            </div>
            <div className='Movie-Container'>
                <Movieposter moviename={"ตาคลีเจเนซิส"} moviepic={"image/thumb_3714.jpg"} />    
                <Movieposter moviename={"ธี่หยด"} moviepic={"image/TeeYod.jpg"} />
                <Movieposter moviename={"ธี่หยด"} moviepic={"image/TeeYod.jpg"} />
                <Movieposter moviename={"ธี่หยด"} moviepic={"image/TeeYod.jpg"} />
            </div>

            {/* หนังเก่า */}
            <div className='Movie'>
                <div>หนังเก่านอกโรงภาพยนต์</div>
                <div>เพิ่มเติม<span>รุปลูกศร</span></div>
            </div>
            <div className='Movie-Container'>
                <Movieposter moviename={"ตาคลีเจเนซิส"} moviepic={"image/thumb_3714.jpg"} />    
                <Movieposter moviename={"ธี่หยด"} moviepic={"image/TeeYod.jpg"} />
                <Movieposter moviename={"ธี่หยด"} moviepic={"image/TeeYod.jpg"} />
                <Movieposter moviename={"ธี่หยด"} moviepic={"image/TeeYod.jpg"} />
            </div>

            {/* ผู้คนที่ฉันติดตาม */}
            <div className='followed-Header'>คนที่คุณกำลังติดตาม</div>
            <div className='followed'>
                <div className='followed-list'>
                    <div className='followed-list-Pic'></div>
                    <div className='followed-list-Name'>Jan Doe</div>
                    <div className='followed-list-movieName'>พี่มากพระขโนง</div>
                    <div className='followed-Date'>23/09/67 20.11 น.</div>
                    <div className='followed-Comment'>A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.</div>
                </div>
                <div></div>
            </div>

            {/* About Us */}
            <div className='aboutUs'>About Us</div>
        </div>
    )
}

export default Homepage;
