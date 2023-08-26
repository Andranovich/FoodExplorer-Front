import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    
    > input {
        display: flex;
        height: 48px;
        padding: 12px 14px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        flex: 1 0 0;
    }
    /* display: flex;
    height: 48px;
    width: 100%;
    padding: 12px 99px; 
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};   
    
    align-items: center;
    gap: 14px;
    border-radius: 5px;
    
    
    
    > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.WHITE_500};
        border: none;
        width: 100%; */
    }
`;