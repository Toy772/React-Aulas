import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{

  //STATES
  //---------------------------------------
    state = {
      name: 'Vagner O. Roxo',
      cont: 0,

  }
//------------------------------------

//FUNCTIONS 
//-----------------------------------------
  handle_P_Click(){
    this.setState({name:'Magda'});
  }
  handle_A_Click = ()=>{

    const {cont} = this.state;
    this.setState({name:'júnior', cont:cont +1});
    /* this.setState({cont:cont +1}) */
  }


//RENDER   
//----------------------------------------------------------------  
  render(){
    const nome = this.state.name;
    const cont = this.state.cont;
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handle_A_Click}>
          {nome} {cont}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

//---------------------------------------------------------------------



export default App;
