import React from 'react';
import './App.css'
import Comment from './Comment'
class CommentsListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', comment: '' };
    }

    handleSubmitComment = () => {
        this.props.handleSubmitComment(this.props.item.name, this.state);
    }
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmitComment}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            required
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value })} />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter comment"
                            required
                            value={this.state.comment}
                            onChange={(event) => this.setState({ comment: event.target.value })} />

                    </div>

                    <button className="btn btn-primary" type="submit" >Submit</button>
                </form>
                <div className="comment-list-container">
                    {this.props.item.comments.map((commentInfo, index) => 
                    <Comment key={index} commentInfo={commentInfo} removeComment={this.props.removeComment(index)}/>)}
                </div>

            </div>
        );

    }
}

export default CommentsListBox;