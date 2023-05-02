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
    /* :hover {
        box-shadow: ${({theme: { colors }}) => colors.shadow};
    } */

`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme: { colors } }) => colors.black};
`

export const Status = styled.span`
    height: 10px;
    width: 10px;
    display: block;
    border-radius: 50%;
    background-color: ${({ status, theme: {colors}})=> status ? colors.green : colors.red};
    background-color: ${({ theme: { colors } }) => colors.black};    
`

export const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;

`