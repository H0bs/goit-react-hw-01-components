import { PropTypes } from "prop-types"
import { FriendsList, FriendItem, FriendAvatar, FriendName, Status } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
    return (
      <FriendsList className="friend-list">
        {friends.map(friend => (
          <FriendItem key={friend.id}>
            <Status isOnline={friend.isOnline}></Status>
            <FriendAvatar src= {friend.avatar} alt="User avatar" width="48" />
            <FriendName>{friend.name}</FriendName>
          </FriendItem>
        ))}
      </FriendsList>
    )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  )
}