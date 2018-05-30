import React from "react";
import ImageGalleryStyle from "./ImageGallery.css";

export default class Image extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <img className={ImageGalleryStyle.galleryImage} src={this.props.url} width={this.props.width} height={this.props.height} alt="Crazy Cat"/>
    );
  }
}
