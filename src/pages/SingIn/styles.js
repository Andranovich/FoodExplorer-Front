import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: stretch; 
    justify-content: space-between;
    align-items: center;
    padding: 90px 108px 112px 153px;

    h1 {
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }


    > div {
        display: flex;
        flex-direction: row;
        gap: 10px;


        img { 
            width: 47px;
        }
    }
`;

export const Form = styled.form`
    padding: 64px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;


    text-align: center;
    border-radius: 15px;

    > .FormInput p {
        text-align: start;
        padding-bottom: 8px;
        
    }

    > .FormInput input {
        width: 348px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        
    }

    > a {
        
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
`;