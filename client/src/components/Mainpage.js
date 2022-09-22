import React, { Component } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";



import Post from "./Post";
class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      post: "",
      isloggedin: true
    };
    this.getPosts();
    axios
      .get("http://localhost:8000/api/isloggedin")
      .then(res => {
        if (!res.data) {
          return this.setState({ isloggedin: false });
        }
      });
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }
  getPosts() {
    axios
      .get("http://localhost:8000/api/showposts")
      .then(posts => this.setState({ posts: posts.data }));
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/addpost", {
        post: this.state.post
      })
      .then(res => {
        this.setState({ post: "" });
        this.getPosts();
      });
  }
  changeHandler(e) {
    this.setState({ post: e.target.value });
  }
  render() {
    return this.state.isloggedin ? (



     
        

      <div>









        <div className="logoutbutton">
        <button
        style={{float:'right'}}
          className="btn btn-info btn-lg"
        
          onClick={() =>
            axios
              .get("http://localhost:8000/api/logout")
              .then(res => (window.location = "/"))
          }
        >
           <AiOutlineLogout/> Logout
         
        </button>
           {/* <a href="#" class="btn btn-info btn-lg">
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </a> */}
        </div>
       <div>
       {/* <form onSubmit={this.submitHandler}>
          <input
            value={this.state.post}
            placeholder="post"
            onChange={this.changeHandler}
            type="text"
            name="post"
            id="post"
          />
          
         
        </form> */}
        {/*  onSubmit={this.submitHandler} */}
        <div >


          <form onSubmit={this.submitHandler} className="form-group" id="form1">
          <input  
                value={this.state.post}
                className="form-control"
            placeholder="Share Something?"
            onChange={this.changeHandler}
            type="text"
            name="post"
            id="post" 
            
            
            />
            <button  className="btn btn-info btn-lg" type="submit" >submit</button>
          </form>

   
    
            
</div>



        {this.state.posts &&
          this.state.posts.map(post => {
            return <Post getposts={this.getPosts} key={post._id} info={post} />;
          })}
       </div>
       
      </div>
    ) : (
      <h3>Please login</h3>
    );
  }
}
export default Mainpage;
