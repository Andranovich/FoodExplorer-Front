import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed  ${theme.COLORS.WHITE_500}` : "none"};

  margin-bottom: 8px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 10px;
  padding-right: 16px;

  svg {
    width: 15px;
    height: 13px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 32px;
    width: 100%;

    padding-top: 10px;
    padding-left: 16px;
    padding-bottom: 10px;
    padding-right: 0;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
