import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  state = {
    name: "circle"
  }

  startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    })
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate"
      })
    }, Math.floor(Math.random() * 10000 + 1));
  }

  render() {
    return (
      <div>
        <div className='arrow'></div>
        <ul className={this.state.name}>
          <li className='text' contentEditable='true' spellCheck='false'>1</li>
          <li className='text' contentEditable='true' spellCheck='false'>2</li>
          <li className='text' contentEditable='true' spellCheck='false'>3</li>
          <li className='text' contentEditable='true' spellCheck='false'>4</li>
          <li className='text' contentEditable='true' spellCheck='false'>5</li>
          <li className='text' contentEditable='true' spellCheck='false'>6</li>
          <li className='text' contentEditable='true' spellCheck='false'>7</li>
          <li className='text' contentEditable='true' spellCheck='false'>8</li>
          <li className='text' contentEditable='true' spellCheck='false'>9</li>
          <li className='text' contentEditable='true' spellCheck='false'>10</li>
          <li className='text' contentEditable='true' spellCheck='false'>11</li>
          <li className='text' contentEditable='true' spellCheck='false'>12</li>
        </ul>
        <button onClick={this.startRotation} className='spin-button'>SPIN</button>
      </div >
    )
  }
}

