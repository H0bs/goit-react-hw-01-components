import { PropTypes } from "prop-types"
import { Item, Avatar, Name, Status } from "./FriendItem.styled"


export const FriendItem = ({ isOnline, avatar, name }) => {
  return <Item>
          <Status isOnline={isOnline}></Status>
          <Avatar src= {avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item> 
}

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}