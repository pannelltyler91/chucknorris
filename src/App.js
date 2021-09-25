
import './App.css';
import {React,Component} from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = {
      joke:""
    }
  }

  _handleclick = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
      
      this.setState({
        joke:data.value
      })
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chuck Norris Jokes</h1>
        </header>
          <div className='jokeContainer'>
            {this.state.joke}
          </div>
          <button onClick={this._handleclick}>Generate Joke</button>
      </div>
    );
  }
  }

export default App;
