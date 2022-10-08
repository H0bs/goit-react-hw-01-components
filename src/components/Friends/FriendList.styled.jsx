import styled from "@emotion/styled";

export const FriendsList = styled.ul`
  width: 300px;
  list-style: none;
  padding: 0;


`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center; 
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 10px 0;
  background-color: aliceblue;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2); 
`;

const getBgColor = friends => {
  switch (friends.isOnline) {
    case true:
      return "green";
    case false:
      return "red";
    default:
      return "yellow";
  }
}

export const Status = styled.span`
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${getBgColor};
`


export const FriendAvatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
`;

export const FriendName = styled.p`
  font-size: 20px;
  margin: 0;
  margin-left: 20px;
  font-weight: 500;
`;