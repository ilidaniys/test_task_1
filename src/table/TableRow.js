import React from 'react';
import styled from "styled-components";
import Cell from "./Cell";
import Button from "../component/Button";
import {useDeleteUser} from "../api/api";
import {useQueryClient} from "react-query";

const TableRow = ({date}) => {
    const TableRowLayout = styled.div`
      display: grid;
      height: 100%;
      text-align: left;
      align-items: center;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 1rem;
      border-bottom: 1px solid white;
    `;

    const NameCell = styled.div`
      display: flex;
      flex-direction: column;
      color: white;
      padding: 1rem 0;
    `;
    const StatusCell = styled.div`
      ${props => props.status === true ? "color: green" : "color: red"}
    `;
    const queryClient = useQueryClient();
    const deleteUserMutation = useDeleteUser();

    const contactFunction = (event) => {
        console.log("contact with user" + date.name)
    }
    const handlerDeleteUser = async (event) => {
        await deleteUserMutation.mutateAsync(date.id);
        await queryClient.invalidateQueries('users');
        console.log("delete user" + date.name)
    }


    return (<TableRowLayout>
        <NameCell>
            <div>{date.name}</div>
            <div>{date.lastName}</div>
        </NameCell>
        <StatusCell status={date.status}>
            {date.status === true ? "Active" : "Inactive"}

        </StatusCell>
        <Cell>{date.location}</Cell>
        <Cell>{date.phoneNumber}</Cell>
        <Button onClickFunction={contactFunction}>Contact</Button>
        <Button onClickFunction={handlerDeleteUser}>Delete</Button>
    </TableRowLayout>);
};

export default TableRow;