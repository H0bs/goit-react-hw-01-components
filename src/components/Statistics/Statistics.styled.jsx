import styled from "@emotion/styled";

export const Section = styled.section`
  margin-top: 20px;
  text-align: center;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h2`
  text-transform: uppercase;
  color: grey;
`

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 75px;
`
export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.187;
  letter-spacing: 0.03em;
  color: honeydew;
`

export const Percentage = styled.span`
  font-weight: 400px;
  font-size: 14px;
  letter-spacing: 0.03em;
  color: honeydew;
`
export const GetRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;