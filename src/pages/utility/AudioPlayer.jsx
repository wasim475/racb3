import { useRef, useState } from 'react';
import { VscPlayCircle } from "react-icons/vsc";
import { AiOutlinePauseCircle } from "react-icons/ai";

const AudioPlayer = ({audioLink}) => {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
console.log(audioLink)
  const AudioPlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <div className='fixed right-4 bottom-14'>
      <audio ref={audioRef} src={audioLink} />

      <button className='text-3xl' onClick={AudioPlay}>{isPlaying ? <AiOutlinePauseCircle/> : <VscPlayCircle/>}</button>
    </div>
  );
};

export default AudioPlayer;
