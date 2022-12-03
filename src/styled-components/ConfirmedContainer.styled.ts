import styled from "styled-components";

const ConfirmedContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    margin-right: 22%;
    width: 330px;
  }
  h2 {
    color: #21092f;
    font-size: 28px;
    margin-top: 35px;
  }
  p {
    color: #8f8694;
    font-size: 18px;
    margin-top: 16px;
  }

  button {
    width: 327px;
    height: 53px;
    border: none;
    border-radius: 8px;
    background: #21092f;
    color: white;
    font-size: 18px;
    margin-top: 48px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export default ConfirmedContainer;
