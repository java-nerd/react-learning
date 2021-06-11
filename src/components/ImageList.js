import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {

    render() {
        const imagess = this.props.images.map(img => {
            return <ImageCard key={img.id} image={img}/>
        });
        return (
            <div className="image-list">{imagess}</div>
        );
    }

}

export default ImageList;