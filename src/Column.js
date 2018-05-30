import React from "react";
import Image from "./Image.js";
import ImageGalleryStyle from "./ImageGallery.css";

export default class Column extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className={ImageGalleryStyle.column}>
         <Image url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLyYlU0kpeLDjqUn5T_RJcNdI8Dd_3nuU042a5XypZLWyLZKO"/>
         <Image url="https://upload.wikimedia.org/wikipedia/commons/2/2c/01_Chow_Chow.jpg"/>
         <Image url="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"/>
         <Image url="http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_1001/ch_1001/w_720/APL/uploads/2015/06/catcon-lil-bub-homepage-2.jpg"/>
         <Image url="http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg"/>
      </div>
    );
  }
}
