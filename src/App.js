import React, { Component } from "react";
import "./App.css";
import Markdown from "react-markdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  async componentDidMount() {
      const DATA_PATH = require(`./data/data.md`);
      const DATA_CONTENT = await fetch(DATA_PATH).then((res) => res.text());
      this.setState({
        data: DATA_CONTENT,
      });
  }

  render() {
    return (
      <div className="App">
        <Markdown source={this.state.data
        } escapeHtml={false} />
      </div>
    );
  }
}

export default App;
