import styled from "styled-components";
type types = {
  isNumber: boolean;
  numberVal: boolean;
  monthVal: boolean;
  yearVal: boolean;
  cvcVal: boolean;
  nameVal: boolean;
};

const Container = styled.div`
  margin-top: 80px;
  @media (min-width: 1200px) {
    margin-right: 22%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 370px;
    width: 330px;
    margin: auto;
    p {
      color: #21092f;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 2px;
      padding-bottom: 9px;
    }

    input {
      width: 311px;
      height: 45px;
      color: #21092f;
      border-radius: 8px;
      background-color: white;
      border: 1.5px solid #dfdee0;

      padding-left: 16px;
      font-size: 18px;
      &:focus {
        outline: 1.5px solid #6348fe;
      }
      &::-webkit-inner-spin-button {
        appearance: none;
      }
    }
    .name {
      .val {
        color: #ff5050;
        display: ${(props: types) =>
          props.nameVal == true ? "none" : "initial"};
      }
      input {
        border-color: ${(props: types) =>
          props.nameVal == true ? "" : "#FF5050;"};
        &:focus {
          outline: ${(props: types) =>
            props.nameVal == true ? "1.5px solid #6348fe" : "none"};
        }
      }
    }
    .number {
      input {
        border-color: ${(props: types) =>
          props.isNumber == true ? "" : "#FF5050;"};
        border-color: ${(props: types) =>
          props.numberVal == true ? "" : "#FF5050;"};
        &:focus {
          outline: ${(props: types) =>
            props.isNumber == true ? "1.5px solid #6348fe" : "none"};
          outline: ${(props: types) =>
            props.numberVal == true ? "1.5px solid #6348fe" : "none"};
        }
      }
      .validation {
        color: #ff5050;
        font-size: 12px;
        display: ${(props: types) =>
          props.isNumber == true ? "none" : "initial"};
      }
      .val {
        color: #ff5050;
        display: ${(props: types) =>
          props.numberVal == true ? "none" : "initial"};
      }
    }

    .for-flex {
      display: flex;
      align-items: start;
      .month,
      .year {
        width: 55px;
        margin-right: 8px;
      }
      .date {
        .val {
          color: #ff5050;
          display: ${(props: types) =>
            props.monthVal == true && props.yearVal == true
              ? "none"
              : "initial"};
        }
        .month {
          border-color: ${(props: types) =>
            props.monthVal == true ? "" : "#FF5050"};
          &:focus {
            outline: ${(props: types) =>
              props.monthVal == true ? "1.5px solid #6348fe" : "none"};
          }
        }

        .year {
          border-color: ${(props: types) =>
            props.yearVal == true ? "" : "#FF5050"};
          &:focus {
            outline: ${(props: types) =>
              props.yearVal == true ? "1.5px solid #6348fe" : "none"};
          }
        }
      }

      .cvc {
        input {
          width: 145px;
        }
        .val {
          color: #ff5050;
          display: ${(props: types) =>
            props.cvcVal == true ? "none" : "block"};
        }
        input {
          border-color: ${(props: types) =>
            props.cvcVal == true ? "" : "#FF5050;"};
          &:focus {
            outline: ${(props: types) =>
              props.cvcVal == true ? "1.5px solid #6348fe" : "none"};
          }
        }
      }
    }
    button {
      width: 327px;
      height: 53px;
      border: none;
      border-radius: 8px;
      background: #21092f;
      color: white;
      font-size: 18px;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

export default Container;
