import React from "react";

export default class Image extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <img src={this.props.sdgfasdfsadfa} alt="Crazy Cat" height="42" width="42"/>
    );
  }
}
