import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id
    });
  };

  return (
    <>{state.currentPost ? (
      <Container fluid>
        <Row>
          <Col size="md-12">

            <img className="detail-image" src={state.currentPost.image} alt={state.currentPost.title} />

          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Container>
              <h1>Feature: {state.currentPost.title}</h1>
              <p>Condition: {state.currentPost.condition}</p>
              <p>Functionality: {state.currentPost.function}</p>
              <p>Cleanliness: {state.currentPost.clean}</p>
              <p>Description: {state.currentPost.body}</p>
              <p>Date stamp: {state.currentPost.date}</p>
            </Container>
          </Col>

          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
              Remove from Issues List
            </button>
          ) : (
              <button className="btn" onClick={addFavorite}>
                Add to Issues List
              </button>
            )};
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/home">← Back to Features</Link>
          </Col>
        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default Detail;
