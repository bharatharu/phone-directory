import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';


// let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa",
    //     phone: "8888888888"
    //   },
    //   { 
    //     id: 1,
    //     name: "Srishti",
    //     phone: "9999999999"
    //   }
    // ];
class ShowSubscribers extends Component {

  render() {
    return (
      <div>
        <Header heading="phone-directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscribersList.map(sub=>{
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="del-btnContainer">
                  <button className="del-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    
    )

  }
}

export default ShowSubscribers;