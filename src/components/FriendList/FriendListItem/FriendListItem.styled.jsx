import styled from "@emotion/styled";


export const ItemsOfFriends = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    background-color: #fff;
    width: 150px;
    padding: 10px;
    border-radius: 10px;
    :hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 18px;
    color: #000000;
`

export const Status = styled.span`
    height: 10px;
    width: 10px;
    display: block;
    border-radius: 50%;
    background-color: ${({ status, theme: { colors} }) => status ? colors.green : colors.red};
    
`

export const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;

`