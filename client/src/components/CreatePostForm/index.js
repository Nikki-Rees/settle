import React, { useRef, useState } from "react";
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
  const [image, setImage] = useState();

  const onChangeImage = e => {
    setImage(e.target.files[0])
  }

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
      image: image
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

          <input className="form-control mb-5" type="file" required ref={imageRef} onChange={onChangeImage} />
          <button className="btn btn-info mt-3 mb-5" type="submit">
            Save feature
        </button>
        </form>
      </div >
    </div>
  );
}
// disabled={state.loading}

export default CreatePostForm;
