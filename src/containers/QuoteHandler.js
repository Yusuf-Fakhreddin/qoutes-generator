import React, { Component } from 'react';
import Database from '../quotesDatabase';
import Quote from '../components/Quote';
import Button from '../components/button';
let randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);
let randomquote = Database[randomNum].quote;
console.log(randomNum);
let author = Database[randomNum].author;
let firstColor = getRandomColor();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

class quoteHandler extends Component {
  state = {
    color: firstColor,
    quote: randomquote,
    auth: author,
  };

  change = () => {
    let randomNum = Math.floor(Math.random() * 20 + 1);
    console.log(randomNum);
    this.setState({ color: getRandomColor() });
    this.setState({ quote: Database[randomNum].quote });
    this.setState({ auth: Database[randomNum].author });
  };

  render() {
    return (
      <body style={{ backgroundColor: this.state.color, height: '100vh' }}>
        <Quote saying={this.state.quote} auth={this.state.auth} />
        <Button clicked={this.change} color={this.state.color} />
      </body>
    );
  }
}

export default quoteHandler;
