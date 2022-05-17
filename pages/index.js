import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, Button, Container, AspectRatio } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";
import { uuid } from "../utils/uuid";
export default function Home() {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.from("videos").select();
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

      console.log(data, error);
      if (data) {
        const { data: result, error: err } = await supabase
          .from("videos")
          .insert({
            url: `${process.env.NEXT_PUBLIC_VIDEO_URL}/${data.Key}`,
            title: "Sunrise in the mountains",
            author_name: "juju",
          });
        console.log(result, data.Key);
      }
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <input onChange={handleVideo} type="file" />
      <Button onClick={handleSubmit} colorScheme="blue" size="md">
        Submit
      </Button>
      <Container
        display="flex"
        minH="80vh"
        maxW="container.lg"
        bgColor="red.400"
      >
        {videos &&
          videos.map((video) => (
            <AspectRatio maxW="250px" h="300px" ratio={1} key={video.id}>
              <video src={video.url} autoPlay />
            </AspectRatio>
          ))}
      </Container>
    </Flex>
  );
}
