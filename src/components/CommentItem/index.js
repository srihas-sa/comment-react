// Write your code here

import './index.css'

const CommentItem = props => {
  const {eachdetail, toggleIsFavorite, deleteingitem} = props
  const {name, comment, isLiked, id} = eachdetail

  const starImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const isLikedii = () => {
    toggleIsFavorite(id)
  }

  const deleteing = () => {
    deleteingitem(id)
  }

  return (
    <div className="likes">
      <div className="inner">
        <div>
          <p className="name">{name}</p>
        </div>
        <div>
          <p>{name} few minutes agoo</p>
          <p>{comment}</p>
        </div>
      </div>

      <div className="like">
        <div className="liked">
          <img src={starImgUrl} onClick={isLikedii} alt="" />
          <p>LIKE</p>
        </div>
        <div>
          <button type="button" onClick={deleteing}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
