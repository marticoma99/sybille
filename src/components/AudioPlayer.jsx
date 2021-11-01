import styles from "../assets/AudioPlayer.module.css";
import { useState } from "react";

function AudioPlayer({ audio }) {
  const [pause, setPause] = useState(false);

  function playAudio() {
    var audioToPlay = document.getElementById("audio");
    setPause(!pause);
    audioToPlay.play();
  }

  function pauseAudio() {
    var audioToPlay = document.getElementById("audio");
    setPause(!pause);
    audioToPlay.pause();
  }

  function getButtonPlay() {
    return (
      <button className={styles.playButton} onClick={playAudio}>
        <i class="fas fa-play"></i>
      </button>
    );
  }

  function getButtonPause() {
    return (
      <button className={styles.playButton} onClick={pauseAudio}>
        <i class="fas fa-pause"></i>
      </button>
    );
  }

  var buttonToShow = ! pause ? getButtonPlay() : getButtonPause(); 

  return (
    <div className={styles.audioContainer}>
      {buttonToShow}
      <p className={styles.songAndArtist}>Sybille's on Jupiter - Billet doux</p>
      <audio id="audio">
        <source src={audio} type="audio/mpeg"></source>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;

/*
<div>
  <audio controls className={styles.audioContainer}>
      <source src={audio} type="audio/mpeg"></source>
      Your browser does not support the audio element.
  </audio>
</div>
*/
