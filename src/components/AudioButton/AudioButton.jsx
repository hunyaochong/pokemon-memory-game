import React from "react";
import "./audio_button.css";

import { Volume, Volume1, Volume2 } from "react-feather";

const useAudio = (url) => {
  console.log(`Inside useAudio, url is: ${url}`);

  const [audio] = React.useState(new Audio(url));
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => setPlaying(!playing);

  React.useEffect(() => {
    if (audio === undefined) return;

    playing ? audio.play() : audio.pause();
  }, [playing]);

  React.useEffect(() => {
    if (audio === undefined) return;

    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function Audio({ music }) {
  console.log(music);
  const [playing, toggle] = useAudio(music);

  return (
    <button className="music_button" onClick={{ toggle }}>
      {playing ? (
        <Volume1 size={32} stroke="hsl(48 100% 62%)"></Volume1>
      ) : (
        <Volume size={32} stroke="hsl(48 100% 62%)"></Volume>
      )}
    </button>
  );
}

export default Audio;
