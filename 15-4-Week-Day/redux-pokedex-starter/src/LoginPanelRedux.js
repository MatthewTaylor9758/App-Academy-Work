import React from 'react';
import { connect } from 'react-redux';
import login from './store/authentication';

class LoginPanelRedux extends React.Component {
  constructor(props) {
    super(props);
    debugger

    this.state = {
      email: 'demo@example.com',
      password: 'password',
    }
  }

  updateValue = name => (e) => {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    this.props.login(this.state.email, this.state.password);
  }


  render() {
    return (
      <main className="centered middled">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.updateEmail} />
          <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.updatePassword} />
          <button type="submit">Login</button>
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginPanelRedux);
