import React from "react";
import "../Styles/SignUpForm.css";

class SignUpForm extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Sign Up</h2>
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default SignUpForm;

