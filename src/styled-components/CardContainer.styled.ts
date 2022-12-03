import styled from "styled-components";
const CardContainer = styled.div`
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #21092f;
  position: relative;
  @media (min-width: 1200px) {
    height: 100vh;
    width: 483px;
    align-items: center;
  }
  div {
    position: absolute;
    height: 156px;
    width: 285px;

    img {
      max-width: 100%;
      position: absolute;
      @media (min-width: 1200px) {
        max-width: 500px;
      }
    }
    p {
      position: absolute;
      color: white;
    }
  }

  .back {
    margin-top: 32px;
    margin-left: 73px;
    @media (min-width: 1200px) {
      margin-top: 290px;
      margin-left: 160px;
    }
    p {
      margin-left: 230px;
      margin-top: 70px;
      font-size: 9px;
      @media (min-width: 1200px) {
        font-size: 14px;
        margin-top: 113px;
        margin-left: 370px;
      }
    }
  }

  .front {
    margin-left: 17px;
    margin-top: 126px;
    @media (min-width: 1200px) {
      margin-bottom: 400px;
      margin-left: 40px;
    }
    .logo {
      width: 55px;
      margin-top: 17px;
      margin-left: 24px;
      @media (min-width: 1200px) {
        width: 65px;
      }
    }
    .number {
      margin-top: 85px;
      margin-left: 24px;
      font-size: 18px;
      letter-spacing: 2.2px;
      @media (min-width: 1200px) {
        font-size: 28px;
        width: 400px;
        margin-top: 145px;
      }
    }

    .name {
      margin-top: 125px;
      margin-left: 24px;
      font-size: 9px;
      letter-spacing: 1.28571px;
      @media (min-width: 1200px) {
        font-size: 14px;
        margin-top: 200px;
      }
    }

    .date {
      margin-top: 125px;
      margin-left: 230px;
      font-size: 9px;
      height: 20px;
      width: 10px;
      letter-spacing: 2px;
      @media (min-width: 1200px) {
        font-size: 14px;
        margin-top: 200px;
        margin-left: 340px;
      }
      .p2 {
        margin-left: 21px;
        margin-left: 29px;
      }
    }
  }
`;

export default CardContainer;
