import React, { Component } from 'react';
import Database from '../quotesDatabase';
import Quote from '../components/Quote';
import Button from '../components/button';
let randomNum = Math.floor(Math.random() * 95 + 1);
let randomquote = Database[randomNum].quote;
let author = Database[randomNum].author;

class quoteHandler extends Component {
  state = {
    appear: true,
    quote: randomquote,
    auth: author,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.change(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  change = () => {
    let randomNum = Math.floor(Math.random() * 95 + 1);
    this.setState({ quote: Database[randomNum].quote });
    this.setState({ auth: Database[randomNum].author });
  };

  btnChange = () => {
    clearInterval(this.timer);
    let randomNum = Math.floor(Math.random() * 95 + 1);
    this.setState({ quote: Database[randomNum].quote });
    this.setState({ auth: Database[randomNum].author });
    this.timer = setInterval(() => this.change(), 10000);
  };

  render() {
    return (
      <body>
        <Quote saying={this.state.quote} auth={this.state.auth} />

        <Button clicked={this.btnChange} />
      </body>
    );
  }
}

export default quoteHandler;
