import React, { Component } from 'react';


class User extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { userid } = this.props
    return (
      <div className='column box'>
        <h1 className=''>{userid}</h1>
        <div className='box'>
          <button onClick={this.handleClick} value='red' className='red box'>
          <strong>ALERT!</strong>
       </button>
          <button onClick={this.handleClick} value='orange' className=' orange box'>
            THE ORANGE BUTTON!  
      </button>
          <button onClick={this.handleClick} value='yellow' className=' yellow box'>
            THE YELLOW BUTTON!
      </button>
        </div>
      </div>
    );
  }

  handleClick(event){
    event.preventDefault()
    let { userid, lat, lon, threatlevel, handleSubmitOrange, handleSubmitRed, handleSubmitYellow } = this.props

    if(event.target.value === 'red'){
      threatlevel = 'high'
      handleSubmitRed(threatlevel, userid, lat, lon)
    }
    if(event.target.value === 'orange'){
      threatlevel = 'medium'
      handleSubmitOrange(threatlevel, userid, lat, lon)
    }
    if(event.target.value === 'yellow'){
      threatlevel = 'low'
      handleSubmitYellow(threatlevel, userid, lat, lon)
    }
  }
}

export default User;