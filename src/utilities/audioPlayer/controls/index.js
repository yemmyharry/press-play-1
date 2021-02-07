import React from "react";
import {
  likedIcon,
  likeIcon,
  pauseIcon,
  playIcon,
  seekBackwardsIcon,
  seekForwardsIcon,
  volumeFullIcon,
  volumeLowIcon,
  volumeMuteIcon,
} from "../../../assets";
import "./controls.css";

class AudioControls extends React.Component {
  state = {
    show: true,
    liked: true,
    playing: false,
    showAlert: false,
    showUnlikedAlert: false,
    volumeValue: 20,
  };

  handleEpisodeLike = () => {
    const liked = this.state.liked ? false : true;
    const showAlert = liked ? true : false;

    if (liked) {
      this.setState({
        liked,
        showAlert,
      });
      setTimeout(() => {
        this.setState({
          showAlert: false,
        });
      }, 1000);
    } else {
      this.setState({
        liked,
        showUnlikedAlert: true,
      });
      setTimeout(() => {
        this.setState({
          showUnlikedAlert: false,
        });
      }, 1000);
    }
  };

  handleVolumeChange = (e) => {
    this.setState({
      volumeValue: e.currentTarget.value,
    });
    this.props.volumeChange(e.currentTarget.value);
  };

  handleVolumeMute = () => {
    const currentVolume = Boolean(this.state.volumeValue) ? 0 : 20;
    this.setState({
      volumeValue: currentVolume,
    });
    this.props.volumeChange(currentVolume);
  };

  handleEpisodePlay = () => {
    const playing = this.state.playing ? false : true;
    this.props.handleEpisodePlay(playing);
    this.setState({
      playing,
    });
  };

  handleAudioSeek = (e, action) => {
    this.props.audioSeek(e, action);
  };

  fmtMSS = (seconds) => {
    return (
      (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + ~~seconds
    );
  };

  render() {
    return (
      <section id="audio-controls-section">
        {this.state.showAlert ? (
          <div className="favorites-alert">Added to Favourites</div>
        ) : this.state.showUnlikedAlert ? (
          <div className="favorites-alert remove">Removed from Favourites</div>
        ) : (
          ""
        )}
        <aside className="play-controls-icons section">
          <div className="item like-container" onClick={this.handleEpisodeLike}>
            {this.state.liked ? likedIcon() : likeIcon()}
          </div>
          <div
            className="item"
            onClick={(e) => this.handleAudioSeek(e, "backward")}
          >
            {seekBackwardsIcon()}
          </div>
          <div className="item" onClick={this.handleEpisodePlay}>
            {this.state.playing ? pauseIcon() : playIcon()}
          </div>
          <div
            className="item"
            onClick={(e) => this.handleAudioSeek(e, "forward")}
          >
            {seekForwardsIcon()}
          </div>
        </aside>
        <aside className="audio-progress-container section">
          <div className="audio-slider">
            <input
              type="range"
              name="audioProgressBar"
              id="audioProgressBar"
              value={
                this.props.duration
                  ? (this.props.currentTime * 100) / this.props.duration
                  : 0
              }
              max={100}
              onChange={(e) => this.props.handleEpisodeProgress(e)}
            />
          </div>
          <div className="time-info">
            <p>{this.fmtMSS(this.props.currentTime)}</p>
            <p>{this.fmtMSS(this.props.duration)}</p>
          </div>
        </aside>
        <aside className="volume-controls section">
          <div className="volume-icon" onClick={this.handleVolumeMute}>
            {this.state.volumeValue <= 0
              ? volumeMuteIcon()
              : this.state.volumeValue > 0 && this.state.volumeValue < 61
              ? volumeLowIcon()
              : volumeFullIcon()}
          </div>
          <div className="audio-slider">
            <input
              type="range"
              name="audioProgressBar"
              id="audioProgressBar"
              max={100}
              value={Math.round(this.state.volumeValue)}
              onChange={(e) => this.handleVolumeChange(e)}
            />
          </div>
        </aside>
      </section>
    );
  }
}

export { AudioControls };