import React from "react";

export default class Table extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Tyler</td>
                <td>Optimistic</td>
              </tr>
            </tbody>
        </table>
       </div>
    );
  }
}
