import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 120rem;
  height: fit-content;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 5px 5px 50px 3px #DEDEDECC;
  border-collapse: separate;
  border-spacing: 0;
`;

const StyledThead = styled.thead`
  background: #CFDFF6;
  border-radius: 10px 10px 0 0;
`;

const StyledTh = styled.th`
  padding: 3rem 2rem;
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 28.64px;
  text-align: center;

  &:first-child {
    border-radius: 10px 0 0 0;
  }
  &:last-child {
    border-radius: 0 10px 0 0;
  }
`;


const StyledTd = styled.td`
  min-width: 25rem;
  padding: 1.5rem;
  border-top: 1px solid #C0C0C0;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 21.48px;
  text-align: center;

  &:last-child {
      text-align: left;
  }
`;

const Table = ({ data }) => {
    return (
        <StyledTable>
            <StyledThead>
                <tr>
                    {data[0] && Object.keys(data[0]).map(key => (
                        <StyledTh key={key}>{key}</StyledTh>
                    ))}
                </tr>
            </StyledThead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.entries(row).map(([key, value], i) => (
                            <StyledTd key={i}>
                                {typeof value === 'string' ? value.split('\n').map((line, index) => (
                                    <span key={index}>{line}<br /></span>
                                )) : value}
                            </StyledTd>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table;
