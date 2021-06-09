import React from 'react';
import faker from 'faker'
import CommentComponent from "./components/CommentComponent";
import ApprovalCard from "./components/ApprovalCard";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {lat: null};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => console.log(err)
        );
    }

    render() {
        return (
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentComponent
                        author="Sam"
                        timeAgo="Today at 04:00PM"
                        imageSrc={faker.image.avatar()}
                        commentText="Wow!"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentComponent
                        author="Alex"
                        timeAgo="Today at 10:00PM"
                        imageSrc={faker.image.avatar()}
                        commentText="Amazing!"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentComponent
                        author="Elena"
                        timeAgo="Yesterday at 02:00AM"
                        imageSrc={faker.image.avatar()}
                        commentText="Superb!"
                    />
                </ApprovalCard>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>
    ,
    document.querySelector('#root'));
