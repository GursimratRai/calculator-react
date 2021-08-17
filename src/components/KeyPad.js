import React ,{Component} from "react";

//Calculator key pad or key panel

class KeyPad extends Component{

  render(){
    return (
      <div className="pad">
        <div className="row">
          <button className="clear" data-key="C">  C  </button>
          <button data-key="AC">  AC  </button>
          <button data-key="sign">  +/-  </button>
          <button className='opterator' data-key="/">  /  </button>
        </div>
        <div className="row" >
          <button data-key="7">  7  </button>
          <button data-key="8">  8  </button>
          <button data-key="9">  9  </button>
          <button className='opterator' data-key="*">  *  </button>
        </div>
        <div className="row" >
          <button data-key="4">  4  </button>
          <button data-key="5">  5  </button>
          <button data-key="6">  6  </button>
          <button className='opterator' data-key="-">  -  </button>
        </div>      
        <div className="row" >
          <button data-key="1">  1  </button>
          <button data-key="2">  2  </button>
          <button data-key="3">  3  </button>
          <button className='opterator' data-key="+">  +  </button>
        </div>
        <div className="row">
          <button data-key="0">  0  </button>
          <button data-key=".">  .  </button>
          <button data-key="%">  %  </button>
          <button className='opterator' data-key="=">  =  </button>
        </div>
      </div>
    );
  }
}

export default KeyPad;
