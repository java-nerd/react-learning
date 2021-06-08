import React from 'react';

const CommentComponent = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.imageSrc}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    {props.commentText}
                </div>
            </div>
        </div>
    );
}

CommentComponent.defaultProps = {
    commentText: 'This is a default value'
}

export default CommentComponent;