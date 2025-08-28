import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Passionate developer who loves coding and coffee.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    // Start counting seconds since component mounted
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}
        <p>Component mounted since: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
