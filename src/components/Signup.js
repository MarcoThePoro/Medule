import React, { Component } from "react"
import axios from "axios"
import Axios from "axios";

class Signup extends Component {
   constructor() {
      super();
      this.state = {
         username: "",
         password: "",
         confirmPassword: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   };

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value
      });
   };

   handleSubmit(event) {
      event.preventDefault();
      console.log("Sign-up-form, username: ");
      console.log(this.state.username);

      // Axios post
      axios.post("/", {
         username: this.state.username,
         password: this.state.password
      })
         .then(response => {
            console.log(response);
            if (response.data) {
               console.log("Signup successful!");
               this.setState({

                  // Redirect to login page on successful sign-up
                  redirectTo: "/login"
               })
            } else {
               console.log("Error Signing up");
            };
         })
         .catch(error => {
            console.log("Server error when Signing up: ");
            console.log(error);
         });
   };

   render() {
      return (
         <div className="signUpForm">
            <h4>Sign Up</h4>
            <form className="form-horizontal">
               <div className="form-group">
                  <div className="col-1 col-ml-auto">
                     <label className="form-label" htmlFor="username">Username: </label>
                  </div>
                  <div className="col-3 col-mr-auto">
                     <input className="form-input"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="col-1 col-ml-auto">
                     <label className="form-label" htmlFor="password">Password: </label>
                     <input className="form-input"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="col-7"></div>
                  <button
                     className="btn btn-primary col-1 col-mr-auto"
                     onClick={this.handleSubmit}
                     type="submit"
                  >Sign Up</button>
               </div>
            </form>
         </div>
      )
   };
};

export default Signup