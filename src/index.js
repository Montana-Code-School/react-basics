console.log("Hurrrwoooo");
import React from "react";
import ReactDOM from "react-dom";
import IndexStyle from "./Index.css";
import List from "./List.js";
import Table from "./Table.js";
import Image from "./Image.js";
import ImageGallery from "./ImageGallery.js"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
    }
  }
  componentDidMount(){
    fetch('https://pixabay.com/api/?key=9085406-e998333c4f260df7776f5c923&q=purple+flower&image_type=photo')
     .then(res =>
      res.json()
     ).then((data) => {
      let mappedHits = data.hits.map((hit) => {
        return {
          url: hit.webformatURL,
          height: hit.webformatHeight,
          width: hit.webformatWidth
        }
      });
      this.setState({
        images: mappedHits
      })
    })
  }

  render(){
    return(
      <div className = {IndexStyle.goodfun}>
        <p>Hello React, we are very cool learners!</p>
        <div>Missoula</div>
        <Table />
        <List />
        {this.state.images.map(img => <Image url={img.url} height={img.height} width={img.width}/> )}
      </div>
    );
  }

};

ReactDOM.render(<Index />, document.getElementById("index"));
