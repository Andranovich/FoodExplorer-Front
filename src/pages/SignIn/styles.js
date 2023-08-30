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
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

    }

    p {
        color: ${({ theme }) => theme.COLORS.WHITE_400};
    }


    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;


        img { 
            width: 47px;
        }
    }

   > h1, a, button {
        font-family: Poppins;
    }

    > a, button {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
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