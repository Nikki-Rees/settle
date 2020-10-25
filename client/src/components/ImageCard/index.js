import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import "./style.css"
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_POSTS, LOADING } from "../../utils/actions";


const ImageCard = props => {
    const [state, dispatch] = useStoreContext();

    const getPosts = () => {
        dispatch({ type: LOADING });
        API.getPosts()
            .then(results => {
                dispatch({
                    type: UPDATE_POSTS,
                    posts: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getPosts();
    }, []);


    return (

        <Container fluid>

            <Row>
                <Col size="md-12 md-offset-1">
                    <div className="main">
                        {state.posts.length ? (

                            <CardDeck>
                                {state.posts.map(post => (
                                    <Card key={post._id}>
                                       
                                            <CardImg top width="100%" src="../assets/images/countersink.jpg" alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle><h4>{post.room}</h4></CardTitle>
                                                <CardSubtitle><h4>Feature: {post.title}</h4></CardSubtitle>
                                                <CardSubtitle><h4>Condition: {post.condition}</h4> </CardSubtitle>
                                                <Link to={"/posts/" + post._id}>
                                                <Button>Edit</Button>
                                                </Link>    
                                                </CardBody>
                               
 </Card>
                             
))}
                            </CardDeck>
                                ):(
                                <h3>You haven't added any features yet!</h3>       
                        )}

                    </div>



                </Col>

            </Row>

        </Container>
    )

};

export default ImageCard;


