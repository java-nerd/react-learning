import React from "react";

class ImageList extends React.Component {

    render() {
        const imagess = this.props.images.map(img => {
            return <img src={img.urls.regular}/>
        });
        return (
            <div>{imagess}</div>
        );
    }

}

export default ImageList;