import React, { Component } from 'react';
import { Clock } from 'lucide-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jane Doe",
        bio: "A passionate software developer with 5 years of experience in web development. Loves creating beautiful and functional user interfaces.",
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
        profession: "Senior Software Engineer"
      },
      shows: false,
      mountTime: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountTime: this.state.mountTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, mountTime } = this.state;

    return (
      <div className="container">
        <div className="card">
          <div className="profile-card">
            <div className="header">
              <h1 className="title">Profile Viewer</h1>
              <div className="timer">
                <Clock />
                <span>Time since mount: {mountTime} seconds</span>
              </div>
            </div>
            
            <button
              onClick={this.toggleProfile}
              className="button"
            >
              {shows ? 'Hide Profile' : 'Show Profile'}
            </button>

            {shows && (
              <div className="profile">
                <div className="profile-content">
                  <img
                    src={person.imgSrc}
                    alt={person.fullName}
                    className="profile-image"
                  />
                  <div className="profile-info">
                    <h2>{person.fullName}</h2>
                    <p className="profession">{person.profession}</p>
                    <p className="bio">{person.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App