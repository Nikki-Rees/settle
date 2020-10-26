import React from "react";
import ImageCard from "../components/ImageCard";
import ImageForm from "../components/ImageForm";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <ImageCard />
        </Col>
        <Col size="md-6 sm-12">
          <ImageForm />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
