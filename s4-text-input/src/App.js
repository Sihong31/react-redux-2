import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = { textLength: 0, textString: '' }

  onInputChange = (event) => {
    this.setState({ textLength: event.target.value.length, textString: event.target.value });
  }

  onLetterClick = (letterIndex) => {
    const text = [ ...this.state.textString.split('') ]
    text.splice(letterIndex, 1);
    const updatedText = text.join('');
    const newTextLength = updatedText.length;
    
    this.setState({ textLength: newTextLength, textString: updatedText });
  }

  render() {
    const charList = this.state.textString.split('').map((letter, index) => {
      return <CharComponent letter={letter} key={index} click={() => this.onLetterClick(index)}/>
    })

    return (
      <div className="App">
        <input type="text" onChange={this.onInputChange} value={this.state.textString} />
        {this.state.textLength}
        <ValidationComponent textLength={ this.state.textLength } />
        { charList }
      </div>
    );
  }
}

export default App;
