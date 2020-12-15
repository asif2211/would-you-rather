import React, { Component } from "react";

export default class NewQuestions extends Component {
  render() {
    return (
        <div>
        {/* <Link to="/" className="close-create-contact">
          back link
        </Link> */}
        <form className="create-contact-form">
         
          <div className="create-contact-details">
            <div>
            <input
              className=""
              name="name"
              type="text"
              placeholder="Name"
              
            />
            </div>
           
            <div>
            <input
              className=""
              name="handle"
              type="text"
              placeholder="Handle"
              
            />
            </div>
           
            <button>Add Contacts</button>
          </div>
        </form>
      </div>
    );
  }
}
