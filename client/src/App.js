import React from 'react';
import './App.css';
import axios from "axios";
import PlayerList from './Components/PlayersList.js'


class App extends React.Component {


  state = {
    playersData: {}
  }


  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          playersData: res.data
        })
      })
      .catch(err => alert(err));
  }



  render () {

    console.log(this.state.playersData);

    return (
      <div classname="App">


<PlayerList players={this.state.playersData} />
      </div>
    )
  }
}

export default App;