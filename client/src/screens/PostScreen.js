import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Post from "../components/Post";
import Comment from "../components/Comment";
// import { Row, Col } from "react-bootstrap";

const PostScreen = ({ match }) => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  // const [trackData, setTrackData] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      console.log("Hello");
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const pst = posts?.data.filter((p) => p.id == match.params.id);
      const cmnts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${pst[0]?.id}/comments`
      );
      // console.log(pst);
      setPost(pst);
      // console.log(cmnts.data);
      setComments(cmnts?.data);
    };
    loadPosts();
  }, [match.params.id]);

  return (
    <>
      <Row>
        {post && (
          <Col key={post?.id} sm={12} md={12} lg={12}>
            <Post
              post={{
                id: post[0].id,
                title: post[0].title,
                body: post[0].body,
              }}
            />
          </Col>
        )}
      </Row>
      {comments &&
        comments.map((c) => (
          <Row>
            <Col>
              <Comment comment={c} />
            </Col>
          </Row>
        ))}
    </>
  );
};

export default PostScreen;
