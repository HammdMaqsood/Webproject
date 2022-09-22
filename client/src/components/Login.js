import React, { Component } from "react";



import axios from "axios";
axios.defaults.withCredentials = true;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", this.state)
      .then(res => {
        if (res.data.error) {
          return this.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return this.setState({ valerrors: res.data.errors });
        }
        return (window.location = "/mainpage");
      });
  }
  signuppage() {
    
        return (window.location = "/Register");
      };
  

  
  render() {
    return (
      <div className="logincontainer">
      
        <form  onSubmit={this.submitHandler}>   
        {/* {this.state.valerrors &&
            this.state.valerrors.email && (
              <p style={{color:'red'}}> !{this.state.valerrors.email.msg}</p>
            )}  */}
       

<h3 style={{textAlign:"center"}}>Log in</h3>
<br/>

<div className="form-group">
    <label>Email</label>
    <input type="email" name="email" id="email" onChange={this.changeHandler}
           className="form-control" placeholder="Enter email" onChange={this.changeHandler}/>
           
           
    
</div>

<div className="form-group">
{/* {this.state.valerrors &&
            this.state.valerrors.password && (
              <p>{this.state.valerrors.password.msg}</p>
            )} */}
    <label>Password</label>
    <input type="password"  name="password"  id="password" className="form-control" placeholder="Enter password" onChange={this.changeHandler} />
</div>
<br/>
           {this.state.error && <p className="error">{this.state.error}</p>}
<button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>


                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a
                </p> */}
                <br/>
                <br/>

            
            </form>
            <button type="signup" onClick={this.signuppage}
           className="btn btn-primary  btn-lg btn-block">Sign up</button>

            

      </div>
    
    );
  }
}

export default Login;
