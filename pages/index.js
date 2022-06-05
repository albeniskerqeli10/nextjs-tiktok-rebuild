import Head from "next/head";
import Video from "../components/UI/Video";
import { Flex, Button,Container,Box, AspectRatio } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect,lazy } from "react";
import { uuid } from "../utils/uuid";



export default function Home() {
  const [videos, setVideos] = useState([]);
  const [video,setVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await supabase.from("videos").select();
      if (data) {
        setVideos(data);
      }
    };
    fetchVideos();
  }, []);

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (video) {
      const { data, error } = await supabase.storage
        .from("videos")
        .upload(uuid(), video, {
          public: true,
        });
      if (data) {
        const { data: result, error: err } = await supabase
          .from("videos")
          .insert({
            url: `${process.env.NEXT_PUBLIC_VIDEO_URL}/${data.Key}`,
            title: "Sunrise in the mountains",
            author_name: "juju",
          });
      }
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center">
    
      <Container
        display="flex"
        minH="80vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
       <Box as="form">
     <input onChange={handleVideo} type="file" />
      <Button onClick={handleSubmit} colorScheme="blue" size="md">
        Submitn
      </Button>
     </Box>
       <Box as="div" display="flex" alignItems="center" justifyContent="center" gap="20px" flexWrap="wrap">
       {videos &&

videos.map((video) => (
  
 <Video key={video.id} video={video} videos={videos}/>
))}
       </Box>
          
      </Container>
    </Flex>
  );
}
