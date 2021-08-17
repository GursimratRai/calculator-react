/* eslint no-eval: 0 */
import React, { Component } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  //function for adding the click event 
  componentDidMount() {
    document.body.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleClick);
  }

  //function for checking the operator
  isOperator = (operator) => {
    if(operator === "+" || operator === "-" ||operator === "/" ||operator === "*"  || operator === "%"){
     return true;
    }
    return false;
  }

  //function for adding clicked value
  addValue = (value) => {
    const {result} = this.state;
    //if prev result is error then clear and add value into the result
    if (result === "Error") {

      this.reset();

    } else {

      //Check if previous value is an operator or digit
      if(result.length>0){
        
        let last = result.charAt(result.length-1);
  
        //if previous value is operator then remove previous operator and add new operator 
        if(this.isOperator(last)){

          if(this.isOperator(value)){
            this.backspace();
          }

          //if zero are appending after any operator i.e. 23 + 0000023
          if(value==='0'){
            return;
          }
        }

      }

      //if zeroes are appending at the start i.e. 0000012
      if(result.length <= 0 && value === "0"){
        return;
      }

      this.setState((prevState)=>({
        result: prevState.result + value,
      }));
    }
  };

  //function for evaluating the expression i.e. 12 + 10 * 2
  evaluate = (value) => {
    const {result} = this.state;
    try {

      let answer = eval(result).toString();
      //check if +/- button is pressed
      if (value === "sign") {
        answer = (-1 * answer).toString();
      }

      this.setState({
        result: answer,
      });

    } catch (error) {
      //handling invalid expression
      this.setState({
        result: "Error",
      });
    }
  };

  //function for clear the result
  reset = () => {
    this.setState({
      result: "",
    });
  };

  //function for deleting the most recent action
  backspace = () => {
    const {result} = this.state;
    if (result.length > 0) {
      this.setState({
        result: result.slice(0, -1),
      });
    }
  };

  //function for handling the click or button pressed
  handleClick = (e) => {
    let value = e.target.getAttribute("data-key");
    if (value == null) {
      return;
    }

    if (value === "C") {
      this.reset();
    } else if (value === "=" || value === "sign") {
      this.evaluate(value);
    } else if (value === "AC") {
      this.backspace();
    } else {
      this.addValue(value);
    }

  };

  render() {
    const {result} = this.state;
    return (
      <div id="container">
        <Display result={result} />
        <KeyPad />
      </div>
    );
  }
}

export default App;
