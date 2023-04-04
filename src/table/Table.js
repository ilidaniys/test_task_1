import React, {useMemo} from 'react';
import styled from "styled-components";
import TableRow from "./TableRow";
import Cell from "./Cell";
import AddUserRow from "./AddUserRow";
import {useUsers} from "../api/api";


const tableHeader = [
    "User", "Status", "Location", "Phone", "Contact", "Actions"
]
const Table = () => {
    const TableLayout = styled.div`
      display: grid;
      grid-template-rows: auto 1fr;
      border-collapse: collapse;
      width: 100%;
    `;
    const TableHeader = styled.div`
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      font-size: 1.5rem;
      border-bottom: 1px solid white;
      padding-bottom: 1rem;
    `;

    const {data: users, isLoading, isError, error} = useUsers();

    const tableHeaderRender = useMemo(() => {
        return tableHeader.map((row, key) => {
            return <Cell key={key}>{row}</Cell>
        })
    }, [])

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <TableLayout>
            <TableHeader>
                {tableHeaderRender}
            </TableHeader>
            {users.map((row, key) => (
                <TableRow key={key} date={row}/>
            ))}
            <AddUserRow/>
        </TableLayout>
    );
};

export default Table;