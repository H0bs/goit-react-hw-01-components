import styled from "@emotion/styled";

export const Container = styled.div`
    width: 300px;
    text-align: center;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
    margin-top: 20px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
`;

export const Tag = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
    color: grey;
`;

export const Location = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    margin-bottom: 20px;
    color: grey;
`;

export const StatsList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: ghostwhite;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 75px;
    border-top: 0.5px solid cornflowerblue;
    :not(:last-child) { border-right: 0.5px solid cornflowerblue };
`;

export const Label = styled.span`
    font-size: 13px;
    line-height: 1.187;
    letter-spacing: 0.03em;
    margin-bottom: 5px;
    color: #696969;
`;

export const Quantity = styled.span`
    font-weight: 400px;
    font-size: 14px;
    letter-spacing: 0.03em;
`;