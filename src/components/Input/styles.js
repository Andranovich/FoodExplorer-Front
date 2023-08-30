import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 5px;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    > div {
        border-radius: 5px;
    }

    svg {
            margin-left: 99px;
        }


    > input {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 48px;
        padding: 12px 14px;
        gap: 14px;
        flex: 1 0 0;
        border: none;
        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.WHITE_500};

         
        
    }
    
`;