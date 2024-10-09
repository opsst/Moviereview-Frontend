import React from "react";
import "./movieinfo.scss"
import Movieactor from "./component/movieinfo-actor";

function Movieinfo() {
    return (
        <div>
            <div className='coverImage'>
                <img src="image/fanday.jpg" alt='fanday'/>
            </div>
            <div className="movieinfo">
                <div className="movieinfo-name">
                    <div>แฟนเดย์</div><div>แฟนกันแค่วันเดียว</div>
                </div>
                <div>
                    <span className="movieinfo-logo"><span>THAI</span>REVIEW</span><span>8.2 (12.0)</span><span>2021</span><span>1 hour 55 minutes</span><span>Sci-fi</span>
                </div>
                <div className="movieinfo-btn">
                    <span className="btn"><button className="btn-watchTrailer">Watch trailer</button></span>
                    <button className="btn-watchNow"><i class="fa-solid fa-play"></i>Watch now</button>
                </div>
            </div>
            <div>
                <div className="movieinfo-story">
                    <div className="movieinfo-story-header">เรื่องย่อ</div>
                    <div className="movieinfo-story-detail">" <span className='highlight'>เด่นชัย' (เต๋อ-ฉันทวิชช์ ธนะเสวี) </span>เจ้าหน้าที่ไอทีสุดเนิร์ดประจำออฟฟิศ วัย 30 ผู้จะมีตัวตนในสายตาพนักงานคนอื่นแค่เวลาอุปกรณ์คอมพิวเตอร์เสีย ในชั่วโมงทำงานที่แสนเร่งรีบไม่มีใครสนใจแม้แต่จะจำชื่อของเด่นชัยจาเขาแอบน้อยใจอยู่บ่อยๆ จนกระทั่งวันที่เขาได้ไปซ่อมปรินเตอร์
    ให้ <span className='highlight'>'นุ้ย' (มิว-นิษฐา จิรยั่งยืน) </span>มาร์เก็ตติ้งสาวคนสวยผู้จดจำชื่อจริงของเขาได้เด่นชัยตกหลุมรักความน่ารักและจริงใจของนุ้ยที่ทำให้เขารู้สึกเหมือน
มีตัวตนขึ้นมา แต่ก็ทำได้เพียงเฝ้าเก็บรายละเอียดและดูแลเธออยู่ห่างๆ เพราะรู้ดีว่าหมาอย่างเขาคงได้แค่แหงนมองเครื่องบิน แต่แล้ว เมื่อบริษัทของเด่นชัยพาพนักงานไปเที่ยวเอาท์ติ้งยังสกีรีสอร์ทที่ฮอกไกโด เด่นชัยได้ขอพรกับระฆังแห่งความรักของรีสอร์ทให้เขาได้เป็นแฟนกับนุ้ย
แค่วันเดียวก็ยังดี โชคชะตาเล่นตลกเมื่อนุ้ยประสบอุบัติเหตุจากสกีจนหมดสติ พอนุ้ยฟื้นก็กลับมีอาการโรคความจำเสื่อมชั่วคราว ที่เรียกกันว่าโรค TGA ซึ่งเป็นโรคความจำเสื่อมที่จะมีอาการอยู่แค่เพียง 1 วันเท่านั้น
เด่นชัยคิดว่านี่เป็นโฮกาสเดียวที่คนอย่างเขาจะได้ใกล้ชิดกับนุ้ย เขาตัดสินใจสวมรอยหลอกนุ้ยว่าทั้งสองเป็นแฟนกันและอยู่เที่ยวต่อกันเพียงสองคน เด่นชัยตั้งใจว่าจะพานุ้ยไปเที่ยวในทุกๆที่ ที่เธออยากไปในฮอกไกโด ใช้เวลาสุดพิเศษของเขากับเธอในฐานะแฟน แม้ว่ามันจะ <span className='highlight'>เป็นการเป็นแฟนกันเพียงวันเดียว</span> ก็ตาม "</div>
                </div>
            </div>
            <div>
                <div className="movieinfo-actor">
                    <div className="movieinfo-actor-header">นักแสดงนำ</div>
                    <div className="movieinfo-actor-pic">
                        <Movieactor actorpic={"1"} actorname={"ฉันทวิชช์ ธนะเสวี (เต๋อ)"}/>
                        <Movieactor actorpic={"1"} actorname={"ฉันทวิชช์ ธนะเสวี (เต๋อ)"}/>
                        <Movieactor actorpic={"1"} actorname={"ฉันทวิชช์ ธนะเสวี (เต๋อ)"}/>
                    </div>
                </div>
            </div>
            <div className="movieinfo-container">
                <div className="movieinfo-review">
                    <div className="movieinfo-review-header">
                        <h1>Reviews</h1>
                        <button>+ Add Your Review</button>
                    </div>
                    <div className="movieinfo-review-box">
                        <div>
                            <div>
                                1
                            </div>
                            <div>
                                2
                            </div>
                            <div>
                                3
                            </div>
                        </div>
                    </div>
                    <div>
                        footer
                    </div>
                </div>
                <div className="movieinfo-data">
                    <div>Release year</div>
                </div>
            </div>
        </div>
    )
}

export default Movieinfo;