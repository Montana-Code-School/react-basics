import React from "react";

export default class List extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
       <h3>Western Montana Cities</h3>
         <ul>
           <li>Helena</li>
           <li>Missoula</li>
           <li>Butte</li>
         </ul>
       </div>
    );
  }
}
