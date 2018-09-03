import React, { Component } from 'react';

import '../../App.css';

class Switch_off extends Component {

  constructor(props){
    
    super(props);
    this.state={
      switchOff : true,
      switchOn : false
    }
    
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary" onClick={()=>{
          this.props.jabBandKare()
        }}>Switch Off</button>
      </div>
    );
  }
}

export default Switch_off;
