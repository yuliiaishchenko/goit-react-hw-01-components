import styled from "@emotion/styled";

export const Table = styled.table`
    text-align: center;
    overflow: hidden;
    margin: 50px auto 30px;
`
export const TableTh = styled.th`
    width: 130px;
    padding: 25px;
    border: 1px solid black;
`
export const TableTd = styled.td`
    width: 130px;
    padding: 25px;
    border: 1px solid black;
`
export const TableHead = styled.thead`
    background-color: gray;
   
`

export const TableTr = styled.tr`
    :nth-child(2n){
        background-color: #98fb98;
    }
`