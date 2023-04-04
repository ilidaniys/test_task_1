import React from 'react';
import styled from "styled-components";

const Cell = ({children}) => {
    const CellBody = styled.div`
      color: white;
      //padding: 10px;
    `;

    return (
        <CellBody>
            {children}
        </CellBody>
    );
};

export default Cell;