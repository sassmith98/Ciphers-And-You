import React from 'react'
import "./popup.css"
class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <a href="" onClick={(e) => {
              e.preventDefault()
              this.props.closePopup()
              return false;
          }} className="close" />
          <img src={this.props.image} height="200"  width="200" alt="help"/>
          </div>
        </div>
      );
    }
}

export default Popup