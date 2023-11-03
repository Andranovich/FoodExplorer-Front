import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border-radius: 0%;
  display: flex;
  flex-direction: column;
  gap: 36px;

  .header {
    height: 114px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > a {
        gap: 16px;
        padding: 60px 28px;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.WHITE_300};
        font-family: "Roboto", sans-serif;
        font-size: 21.163px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    
  }

  .search {
    margin: 0 28px;
  }

  .buttons {
    margin: 0 28px;
    display: flex;
    flex-direction: column;    
    gap: 10px;

   > a {
        width: 100%;
        padding-left: 10px;
        height: 54px;
        border-bottom: 1px solid #192227;
        

        a {
            color: ${({ theme }) => theme.COLORS.WHITE_300};
            font-family: "Poppins", sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 300;
            line-height: 140%;
 
        }
    }
}


`;