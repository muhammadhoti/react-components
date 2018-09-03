import React, { Component } from 'react';

import '../../App.css';

class Broken extends Component {

  constructor(){
    
    super();
    this.state={
    }
    
  }

  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={()=>{
          this.props.jabTorde()
        }}>Break</button>
      </div>
    );
  }
}

export default Broken;
