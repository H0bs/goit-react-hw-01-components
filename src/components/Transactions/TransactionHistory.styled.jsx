import styled from "@emotion/styled";

export const Table = styled.table`
  background-color: burlywood;
  color: cornflowerblue;
  width: 300px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Thead = styled.thead`
  height: 30px;
  background-color: gainsboro;
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Tr = styled.tr`
  height: 30px;
  color: cadetblue;
  :nth-last-of-type(even) {
    background-color: cornsilk;
  }
  :nth-last-of-type(odd) {
    background-color: bisque;
  }
`;