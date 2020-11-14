import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [trackData, setTrackData] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      console.log("Hello");
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(posts.data);
    };
    loadPosts();
  }, [trackData]);

  return (
    <>
      <Row>
        {posts &&
          posts.map((p) => (
            <Col key={p?.id} sm={12} md={12} lg={12}>
              <Post post={p} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
