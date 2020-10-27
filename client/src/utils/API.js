import axios from "axios";

export default {

  Signup: function (signupData) {
    console.log(signupData)
    return axios.post("/api/users/signup", signupData)
      .then(() => data => window.location = "/home");
  },

  Login: function (loginData) {
    return axios.post("/api/users/login", loginData)
      .then(data => {
        window.location = "./home";
        return data;
      }).catch(err => {
        console.log("Error with login: ", err);
        if (err) {
          alert("Incorrect username or password");
          return;
        }
      });
  },

  Logout: function () {
    return axios.get("/logout")
      .then(data => {
        localStorage.removeItem("user");
        window.location = "./home";
      })
      .catch(err => {
        console.log(err)
      })
  },


  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    const formData = new FormData();
    formData.append("room", postData.room);
    formData.append("title", postData.title);
    formData.append("condition", postData.condition);
    formData.append("clean", postData.clean);
    formData.append("function", postData.function);
    formData.append("body", postData.body);
    formData.append("image", postData.image);
    return axios.post("/api/posts", formData);

  }

};
