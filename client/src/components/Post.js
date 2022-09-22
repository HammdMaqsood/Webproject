import React, { Component } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import axios from "axios";
class Post extends Component {
  constructor(props) {
    super(props);
    this.voteHandler = this.voteHandler.bind(this);
  }

  voteHandler() {
    axios
      .post("http://localhost:8000/api/postupvote/" + this.props.info._id)
      .then(res => {
        this.props.getposts();
      });
  }
  render() {
    var post = this.props.info;
    return (
      <div> 
          <div class="col-sd-1">
    <div class="social-feed-separated">
        <div class="social-avatar">
            
                <img alt="image" src="https://bootdey.com/img/Content/avatar/avatar1.png"></img>
           
        </div>
        </div>
        </div>
        <div class="social-avatar">
                
        {post.user.username}
              
                
            </div>
            <div class="social-body">
                <p>
                {post.post}
                </p>
                </div>
              
              
                <button class="btn btn-white btn-xs" onClick={this.voteHandler}><FaThumbsUp/> </button>
                
                



{/*         
        <div  className="userspost">
          <h3> {post.post} </h3>
           <div  className="div1"> -{post.user.username}</div> 
        <button className="likebutton" onClick={this.voteHandler}><FaThumbsUp/></button>
        </div>
        <br/> */}

         
          
         
        
        {/* <ul>
          <li>post: {post.post}</li>
          <li>likes: {post.vote}</li>
          <li>by: {post.user.username}</li>
        </ul>
       */}


      </div>
     
    );
  }
}

export default Post;
