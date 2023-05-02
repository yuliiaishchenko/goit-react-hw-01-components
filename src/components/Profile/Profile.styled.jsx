import styled from "@emotion/styled";

export const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    width: min-content;
    border-radius: 15px;
`
export const Description = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    padding: 15px;
    border-radius: 20px;
    background: #fff;
`
export const Avatar = styled.img`
    position: absolute;
    transform: translate(-50px, -50px);
    max-height: 90px;
    border-radius: 50%;
    `

export const Name = styled.p `
    font-weight: 500;
    line-height: 1.18;
    margin-top: 50px;
    margin-bottom: 0;

`

export const Tag = styled.p `
font-size: 12px;
margin-top: 10px;
margin-left:0;
`

export const Location = styled.p `
    font-weight: 500;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 0;
`

export const Stats = styled.ul `
list-style: none;
display: flex;
padding: 10px;
margin: 0;
margin-top: 15px;
li{
    background-color: white;
    border-radius: 10px;
    display: grid;
    width: 80px;
    justify-content: center;
    border: 2px solid azure;
    padding: 5px;
    margin-right: 10px;
@media screen and (min-width:768px){
    width: 128px;
}}
`
export const Label = styled.span    `
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 5px;
`

export const Quantity = styled.span`
    font-weight: 500;
    font-size: 22px;
    color: #000;
`