import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";


function CreatePostForm() {
  const roomRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const conditionRef = useRef();
  const cleanRef = useRef();
  const functionRef = useRef();
  const imageRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      room: roomRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
      condition: conditionRef.current.value,
      clean: cleanRef.current.value,
      function: functionRef.current.value,
      image: imageRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    roomRef.current.value = "";
    titleRef.current.value = "";
    conditionRef.current.value = "";
    cleanRef.current.value = "";
    functionRef.current.value = "";
    bodyRef.current.value = "";
    imageRef.current.value = "";
  };

  return (
    <div>
      {/* <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div> */}
      <div>
        <h1>Add a feature</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <input className="form-control mb-5" required ref={roomRef} placeholder="Location / Room name e.g. Kitchen" />
          <input className="form-control mb-5" required ref={titleRef} placeholder="Name of your feature e.g. Kitchen sink" />
          <select className="form-control mb-5" required ref={conditionRef}>
            <option value="">Select overall condition</option>
            <option>Excellent</option>
            <option>Very good</option>
            <option>Good</option>
            <option>Poor</option>
            <option>Replacement required</option>
          </select>
          <select className="form-control mb-5" required ref={cleanRef}>
            <option value="">How clean is it?</option>
            <option>As new</option>
            <option>Squeaky clean</option>
            <option>Acceptable</option>
            <option>Cleaning required</option>
          </select>
          <select className="form-control mb-5" required ref={functionRef}>
            <option value="">Does it function?</option>
            <option>Functional</option>
            <option>Not functional</option>
          </select>
          <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Description" />
          <input className="form-control mb-5" ref={imageRef} placeholder="Image Upload" />
          <button className="btn btn-info mt-3 mb-5" disabled={state.loading} type="submit">
            Save Post
        </button>
        </form>
      </div >
    </div>
  );
}

export default CreatePostForm;
