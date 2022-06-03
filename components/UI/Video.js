import React,{useRef,useEffect,useState} from 'react'
import { AspectRatio,Box,Button,IconButton,Text, Progress } from '@chakra-ui/react'
import { Play,Pause ,Volume2,VolumeX } from 'react-feather';

const Video = ({video}) => {
    const [currentTime,setCurrentTime] = useState(0);
    const videoRef = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false);

const [isMuted,setIsMuted] = useState(false);



  const handleVideoControls = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setIsPlaying(true);
   
    } else if (control === "pause") {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    else {
      setIsPlaying((prev) => prev);
    }
  };

const handleVideoSound = (control) => {
    if (control === "mute") {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(true);
      console.log('muted')
    } else if (control === "unmute"){
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(false);
      console.log('unmuted')
    }
    else {
      setIsMuted((prev) => prev)
    }
  }



  return (
    <AspectRatio bgColor="blue.500"  width="300px"  h="auto" ratio={9/16}>
    <Box as="div" width="auto" h="auto" display="flex"  flexDirection="column" alignItems="center" justifyContent="center"   position="absolute">
    <Box objectFit="cover" minH="100%" minW="100%"  position="relative" as="video" ref={videoRef} src={video.url}    playsInline muted loop>
    </Box>
      <Box display="flex" width="100%"   zIndex="1"  alignItems="center" justifyContent="center" position="absolute" flexDirection="row">
      
          {isPlaying ? (
            <IconButton   colorScheme='transparent'
  onClick={() => handleVideoControls("pause")} icon={<Pause/>}/>
          ): (
            <IconButton colorScheme='transparent' icon={<Play/>} onClick={() => handleVideoControls("play")}>
</IconButton>
          )}

          {isMuted ? (
            <IconButton   colorScheme='transparent'
  onClick={() => handleVideoSound("unmute")} icon={<Volume2/>}/>
          ): (
            <IconButton colorScheme='transparent' icon={<VolumeX/>} onClick={() => handleVideoSound("mute")}>
</IconButton>
          )} 
          </Box>



    </Box>
  </AspectRatio>
  )
          }
  
export default Video;