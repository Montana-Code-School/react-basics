import React from "react";
import Column from "./Column.js";
import ImageGalleryStyle from "./ImageGallery.css";

export default class ImageGallery extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className={ImageGalleryStyle.row}>
        <Column images={this.props.images} />
      </div>
    )
  }
}


// 'https://pixabay.com/api/?key=9085406-e998333c4f260df7776f5c923&q=' + s1 + '+' + s2 + '&image_type=photo';
