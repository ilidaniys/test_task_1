import React from 'react';
import styled, {keyframes} from "styled-components";
import {useQueryClient} from "react-query";
import {useAddUser} from "../api/api";

const AddUserRow = () => {
    const Wrapper = styled.div`
      margin-top: 1rem;
      padding: 0.2rem 0;
      display: flex;
      align-content: center;
      justify-content: center;
      box-sizing: border-box;
      border: 1px white dotted;
    `;
    const rotate = keyframes`
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(10deg);
      }
      50% {
        transform: rotate(0 eg);
      }
      75% {
        transform: rotate(-10deg);
      }
      100% {
        transform: rotate(10deg);
      }
    `;

    const Plus = styled.span`
      font-size: 3rem;
      color: white;
      cursor: pointer;
      text-align: center;

      &:hover {
        animation: ${rotate} 0.5s ease-in-out;
      }`;

    const queryClient = useQueryClient();
    const deleteUserMutation = useAddUser();

    const handlerAddUser = async (event) => {
        await deleteUserMutation.mutateAsync();
        await queryClient.invalidateQueries('users');
        console.log("add user")
    }

    return (
        <Wrapper>
            <Plus onClick={() => handlerAddUser()}>+</Plus>
        </Wrapper>
    );
};

export default AddUserRow;