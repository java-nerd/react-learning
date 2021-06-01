import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentComponent from "./CommentComponent";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard/>
            <CommentComponent
                author="Sam"
                timeAgo="Today at 04:00PM"
                imageSrc={faker.image.avatar()}
                commentText="Wow!"
            />
            <CommentComponent
                author="Alex"
                timeAgo="Today at 10:00PM"
                imageSrc={faker.image.avatar()}
                commentText="Amazing!"
            />
            <CommentComponent
                author="Elena"
                timeAgo="Yesterday at 02:00AM"
                imageSrc={faker.image.avatar()}
                commentText="Superb!"
            />
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root'));
