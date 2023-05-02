import styled from "@emotion/styled";


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin:  0 auto;
    max-width: 100%;
    border-radius: 10px;
    width: 360px;
    margin-top: 15px;
`

export const Title = styled.h2`
   display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 50px;
  color: grey;
`

export const StatList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
margin: 0;
list-style: none;
    padding: 0;

`


export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 0,5rem;
    background-color: gray;
    border-radius: 10px;
    padding: 5px;
    border: 2px solid azure;
`

export const Label = styled.span`
   color: azure;
    font-size: 0.8rem;
`

export const Percentage = styled.span`
    font-size: 1.2rem;
    color: aquamarine;
`

