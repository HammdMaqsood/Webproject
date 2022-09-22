import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      password_con: "",
      userdata: null,
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // sign() {
  //   return (window.location = "/");
    
    
  // };
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", this.state)
      .then(result => {
        if (result.data.errors) {
          console.log("ok");
       
          
          return this.setState(result.data);
          
        }
        
        return this.setState({
          userdata: result.data,
          errors: null,
          success: true
          (window.location = "/"),
         
          
        }); 
       
      });
  }     
  render() {
    return (
      <div className="signupcontainer">
        {this.state.success && <p>You are successfully registerated!</p>}
        <form onSubmit={this.submitHandler}>
        <h3 style={{textAlign:"center"}}>Sign Up</h3>
<br/>

<div className="form-group">
    <label>Username</label>
    <input type="text"
            placeholder="username"
            onChange={this.changeHandler}
            name="username"
            id="username"
           className="form-control"/>
           
           {this.state.errors &&
            this.state.errors.username && (
              <p className="error">{this.state.errors.username.msg}</p>
            )}   
</div>

<div className="form-group">
    <label>Email</label>
    <input type="email"
            placeholder="email"
            name="email"
            onChange={this.changeHandler}
            id="emailreg"
           className="form-control"  />    
            {this.state.errors &&
            this.state.errors.email && <p className="error">{this.state.errors.email.msg}</p>}
</div>


<div className="form-group">
    <label>First Name</label>
    <input type="text"
            onChange={this.changeHandler}
            placeholder="firstname"
            name="firstname"
            id="firstname"
           className="form-control"  />    
            {this.state.errors &&
            this.state.errors.firstname && (
              <p className="error">{this.state.errors.firstname.msg}</p>
            )}
           
</div>


<div className="form-group">
    <label>Last Name</label>
    <input type="text"
            onChange={this.changeHandler}
            placeholder="lastname"
            name="lastname"
            id="lastname"
           className="form-control"  />    

{this.state.errors &&
            this.state.errors.lastname && (
              <p className="error">{this.state.errors.lastname.msg}</p>
            )}
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password"
            onChange={this.changeHandler}
            placeholder="password"
            name="password"
            id="passwordreg"
           className="form-control"  />    
           {this.state.errors &&
            this.state.errors.password && (
              <p className="error">{this.state.errors.password.msg}</p>
            )}
</div>

<div className="form-group">
    <label>Confirm Password</label>
    <input type="password"
            onChange={this.changeHandler}
            placeholder="password_con"
            name="password_con"
            id="password_con"
           className="form-control"  />  
           {this.state.errors &&
            this.state.errors.password_con && (
              <p className="error">{this.state.errors.password_con.msg}</p>
            )}  
</div>

<br/>
          
<button type="submit" className="btn btn-dark btn-lg btn-block">Sign up</button>
          
          
          {/* <input
            type="text"
            placeholder="username"
            onChange={this.changeHandler}
            name="username"
            id="username"
          />{" "}
          {this.state.errors &&
            this.state.errors.username && (
              <p>{this.state.errors.username.msg}</p>
            )}
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.changeHandler}
            id="emailreg"
          />
          {this.state.errors &&
            this.state.errors.email && <p>{this.state.errors.email.msg}</p>}
          <br />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="firstname"
            name="firstname"
            id="firstname"
          />
          {this.state.errors &&
            this.state.errors.firstname && (
              <p>{this.state.errors.firstname.msg}</p>
            )}
          <br />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="lastname"
            name="lastname"
            id="lastname"
          />
          {this.state.errors &&
            this.state.errors.lastname && (
              <p>{this.state.errors.lastname.msg}</p>
            )}
          <br />
          <input
            type="password"
            onChange={this.changeHandler}
            placeholder="password"
            name="password"
            id="passwordreg"
          />
          {this.state.errors &&
            this.state.errors.password && (
              <p>{this.state.errors.password.msg}</p>
            )}
          <br />
          <input
            type="password"
            onChange={this.changeHandler}
            placeholder="password_con"
            name="password_con"
            id="password_con"
          />
          {this.state.errors &&
            this.state.errors.password_con && (
              <p>{this.state.errors.password_con.msg}</p>
            )}
          <br />
          <button type="Submit">Submit</button> */}
        </form>
      </div>
    );
  }
}

export default Register;
