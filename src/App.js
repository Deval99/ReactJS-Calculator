import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer: ""
    }
  }
  enterDigits(digit){
    this.setState({answer: this.state.answer+digit})
  }
  clear(){
    this.setState({answer: ""})
  }
  calc(){
    const ans = eval(this.state.answer)
    this.setState({answer: String(ans)})
  }
  
  render(){
    return(
      <div className="maindiv">
        <input style={{width:'94%', margin:"7px", marginLeft: "5px", marginRight: "5px"}}
          value={this.state.answer}/>
        <div style={{marginLeft: "5px", marginRight: "5px", paddingBottom: 5}}>
          <button onClick={() => this.enterDigits(1)} className="numbtn">1</button>
          <button onClick={() => this.enterDigits(2)} className="numbtn">2</button>
          <button onClick={() => this.enterDigits(3)} className="numbtn">3</button>
          <button onClick={() => this.enterDigits('+')} className="numbtn">+</button>
          <br/>
          <button onClick={() => this.enterDigits(4)} className="numbtn">4</button>
          <button onClick={() => this.enterDigits(5)} className="numbtn">5</button>
          <button onClick={() => this.enterDigits(6)} className="numbtn">6</button>
          <button onClick={() => this.enterDigits('-')} className="numbtn">-</button>
          <br/>
          <button onClick={() => this.enterDigits(7)} className="numbtn">7</button>
          <button onClick={() => this.enterDigits(8)} className="numbtn">8</button>
          <button onClick={() => this.enterDigits(9)} className="numbtn">9</button>
          <button onClick={() => this.enterDigits('*')} className="numbtn">*</button>
          <br/>
          <button onClick={() => this.enterDigits(0)} className="numbtn">0</button>
          <button onClick={() => this.clear()} className="numbtn">Clear</button>
          <button onClick={() => this.calc()} className="numbtn">=</button>
          <button onClick={() => this.enterDigits('/')} className="numbtn">/</button>
        </div>
      </div>
    );
  }
}

export default App;