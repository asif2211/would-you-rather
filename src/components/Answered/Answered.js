import React, { Component } from "react";

import QuestionsList from "../QuestionList/QuestionsList";
class Answered extends Component {
  render() {
    const { listIds, emptyListNote, title } = this.props;
    
    return (
      <div>
        {listIds.length ? (
          listIds.map((id) => <QuestionsList key={id} id={id} title={title}/>)
        ) : (
          <p>{emptyListNote}</p>
        )}
      </div>
    );
  }
}

export default Answered;
