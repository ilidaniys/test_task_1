import React from 'react';
import styled from "styled-components";

const Button = ({children, onClickFunction}) => {
    const ContactLayout = styled.button`
      height: 3rem;
      color: white;
      width: 100%;
      background: #282c34;
      box-sizing: border-box;
      border: 0.1rem white solid;
      cursor: pointer;
      padding: 0.5rem 1rem;

      &:hover {
        filter: brightness(1.2);
      }
    `;

    return (
        <ContactLayout onClick={(e) => onClickFunction(e)}>
            {children}
        </ContactLayout>
    );
};

export default Button;