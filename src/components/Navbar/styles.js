import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    flex-direction: row;
    padding: 24px 123px;
    align-items: center;
    justify-content: center;
    gap: 32px;

    > div {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    

    h1 {        
        gap: 10px;
        width: 156px;
        height: 28px;
        font-size: 24px;
    }

    > button {        
        max-width: 216px;
    }
`;