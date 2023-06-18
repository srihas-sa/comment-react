import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', lists: [], commentcount: 0}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addingcomment = () => {
    const {name, comment, commentcount} = this.state

    const newContact = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      lists: [...prevState.lists, newContact],
      commentcount: prevState.commentcount + 1,
      name: '',
      comment: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      lists: prevState.lists.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isLiked: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  deleteingitem = id => {
    this.setState(prevState => ({
      lists: prevState.lists.map(eachContact => {
        if (id !== eachContact.id) {
          return {...eachContact}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {lists, name, comment, commentcount} = this.state

    return (
      <div className="padd">
        <div className="outer">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies </p>
            <input
              type="text"
              placeholder="Your Name"
              className="margin"
              onChange={this.onChangeName}
            />{' '}
            <br />
            <textarea
              rows="10"
              cols="50"
              placeholder="Your Comments"
              onChange={this.onChangeComment}
            />{' '}
            <br />
            <button
              className="button"
              onClick={this.addingcomment}
              type="button"
            >
              Add Comments
            </button>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt=""
            />
          </div>
        </div>
        <hr />
        <p>
          {' '}
          <span>{commentcount}</span> comments
        </p>
        {lists.map(eachContact => (
          <CommentItem
            key={eachContact.id}
            eachdetail={eachContact}
            name={name}
            comment={comment}
            toggleIsFavorite={this.toggleIsFavorite}
            deleteingitem={this.deleteingitem}
          />
        ))}
      </div>
    )
  }
}

export default Comments
