import React from 'react';
import './App.css';

const Comment = (props) => {
  return (
      <div className="comment-container row"> 
           <p className="col-xs-11">Written by:{props.commentInfo.name} - {props.commentInfo.comment}</p> 
           <div className="col-xs-1" onClick={props.removeComment}><span className="glyphicon glyphicon-trash" ></span></div>     
    </div>
  );

}

export default Comment;