import React from 'react';

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuoteIndex: this.getRandomInt(props.quotes.length),
    };
  }

  getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
  };

  changeQuote = () => {
    this.setState((state, props) => {
      const { currentQuoteIndex } = state;
      const { quotes } = props;

      let newIndex = -1;

      do {
        newIndex = this.getRandomInt(quotes.length);
      } while (newIndex === currentQuoteIndex);

      return {
        currentQuoteIndex: newIndex,
      }
    })
  }

  render() {
    return (
      <>
        <h2>Random Quote</h2>
        <p>{this.props.quotes[this.state.currentQuoteIndex]}</p>
        <button type='button' onClick={this.changeQuote}>Change Quote</button>
      </>
    );
  };
};

RandomQuote.defaultProps = {
  quotes: [
    'May the force be with you.',
    'There\'s no place like home.',
    "I'm the king of the world!",
    'My mama always said likfe was like a box of chocolates.',
    'I\'ll be back.',
  ],
}

export default RandomQuote;
