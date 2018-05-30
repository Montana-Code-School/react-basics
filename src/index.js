console.log("Hurrrwoooo");
import React from "react";
import ReactDOM from "react-dom";
import IndexStyle from "./Index.css";
import List from "./List.js";
import Table from "./Table.js";
import Image from "./Image.js";

const Index = () => {
  return <div className = {IndexStyle.goodfun}>
      <p>Hello React, we are very cool learners!</p>
      <div>Missoula</div>
      <Table />
      <List />
      <Image sdgfasdfsadfa="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
      <Image sdgfasdfsadfa="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg" />
    </div>;
};



ReactDOM.render(<Index />, document.getElementById("index"));
