import React, { Component } from 'react';
import Content from '../Content/Content';
import Login from '../../components/Login';
import App from '../../App';

const withAuthenticate = Content=> Login => {

    return class extends React.Component {
      constructor(props){
        super(props);
        this.state ={
          user: true
        }
      }
  
      componentDidMount(){
        let currentIndex= localStorage.getItem("username");
        if (currentIndex=== null) {
          this.setState({user: !true})
        } else {
          this.setState({user: true})
        }
      }
  
      render() {
        return (
          <div>
            {this.state.user === true ? <Content/>: <Login/>}
          </div>
        )
      }
    };
  }
  
  export default withAuthenticate;
  