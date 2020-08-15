import React, { Component } from "react";

export default class FormDemo extends Component {
  //Form ile Çalışma
  //event.target = input dan gelen nesne bilgisi..

  state = {
    userName: '',
    city:''
  };

  //Standart 2 methoddur heryerde kullanılabilir. 

  onChange = (event) => {
    //this.setState({ userName: event.target.value });
    //let name aşşağıdaki her ikisi içinde geçerli olan name.. 
    //let value aşşağıdaki her ikisi içinde yazılan değer..

    let name= event.target.name;
    let value =event.target.value;

    this.setState({[name]:value});

  };

  onSubmit= (event) => {
    //event.preventDefault() fonksiyonu sayfayı refresh edip cart bilgisinin çöpe gitmesini engeller..
    event.preventDefault();
    alert(this.state.userName);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <h3> User Name </h3>
          <input type="text" name="userName" onChange={this.onChange}>
          </input>
          <h3> User Name is : {this.state.userName}</h3>

          <h3> City </h3>
          <input type="text" name="city" onChange={this.onChange}>
          </input>
          <h3> City is : {this.state.city}</h3>

          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
