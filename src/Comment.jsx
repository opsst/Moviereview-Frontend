import React from 'react';

function CommentCard({ avatar, name, date, time, commentText, rating }) {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <img className="avatar" src={avatar} alt={name} />
        <div className="comment-info">
          <div className="comment-name">{name}</div>
          <div className="comment-date">{`${date} ${time} น.`}</div>
        </div>
        <div className="comment-rating">
        <div className="star-rating">
            <div className="star-background">
                {'★'.repeat(5)} {/* ดาวเงาที่เป็นพื้นหลัง */}
            </div>
            <div className="star-foreground" style={{ width: `${(rating / 5) * 100}%` }}>
                {'★'.repeat(5)} {/* ดาวเต็มที่จะปรากฏตามคะแนน */}
            </div>
        </div>
          <span className="rating">{rating}</span>
        </div>
      </div>
      <div className="comment-body">
        <p>{commentText}</p>
      </div>
    </div>
  );
}

export default CommentCard;