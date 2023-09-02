import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-radius: 5px;
  border: none;

  text-align: center;
  font-weight: 500;
  line-height: 24px;

  &:disabled {
    opacity: 0.5;
  }

  & > svg {
    font-size: 32px;
  }

  

`;
