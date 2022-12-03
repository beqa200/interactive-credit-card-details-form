import { FormContainer } from "../styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Form = (props: Props2) => {
  let numberLength = props.cardNumber.length;
  const [clickConfirm, setClickConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (/[a-z]/gi.test(props.cardNumber) == true) {
      props.setIsNumber(false);
    } else {
      props.setIsNumber(true);
    }
  }, [props.cardNumber]);

  return (
    <FormContainer
      isNumber={props.isNumber}
      nameVal={props.nameVal}
      numberVal={props.numberVal}
      monthVal={props.monthVal}
      yearVal={props.yearVal}
      cvcVal={props.cvcVal}
    >
      <form>
        <div className="name">
          <p>Cardholder Name</p>
          <input
            placeholder="e.g. Jane Appleseed"
            value={props.name}
            onChange={(e) => {
              if (
                /[a-z]+$/i.test(e.target.value) == true ||
                e.target.value == "" ||
                /\s+$/i.test(e.target.value) == true
              ) {
                props.setName(e.target.value);
              }
              props.setNameVal(true);
            }}
          />
          <p className="val">Can’t be blank</p>
        </div>
        <div className="number">
          <p>Card Number</p>
          <input
            placeholder="e.g. 1234 5678 9123 0000"
            value={props.cardNumber}
            maxLength={19}
            onChange={(e) => {
              props.setCardNumber(e.target.value);

              if (
                (numberLength == 3 ||
                  numberLength == 8 ||
                  numberLength == 13) &&
                (e.nativeEvent as any as { data: string | null }).data != null
              ) {
                props.setCardNumber(e.target.value + " ");
              }
              props.setNumberVal(true);
              setClickConfirm(false);
            }}
          />
          <p className="val">Can’t be blank</p>
          <p className="validation">Wrong format, numbers only</p>
          <p
            style={
              numberLength < 19 &&
              clickConfirm == true &&
              props.cardNumber != "" &&
              /[a-z]/gi.test(props.cardNumber) != true
                ? { display: "block", color: "#FF5050" }
                : { display: "none", color: "#FF5050" }
            }
          >
            Invalid number
          </p>
        </div>
        <div className="for-flex">
          <div className="date">
            <p>Exp. Date (MM/YY)</p>
            <input
              className="month"
              placeholder="MM"
              value={props.month}
              maxLength={2}
              onChange={(e) => {
                if (
                  /\d/gi.test(e.target.value) == true ||
                  e.target.value == ""
                ) {
                  props.setMonth(e.target.value);
                }

                props.setMonthVal(true);
              }}
            />

            <input
              className="year"
              placeholder="YY"
              value={props.year}
              maxLength={2}
              onChange={(e) => {
                if (
                  /\d/gi.test(e.target.value) == true ||
                  e.target.value == ""
                ) {
                  props.setYear(e.target.value);
                }

                props.setYearVal(true);
              }}
            />
            <p className="val">Can’t be blank</p>
          </div>
          <div className="cvc">
            <p>CVC</p>
            <input
              placeholder="e.g. 123"
              value={props.cvc}
              maxLength={3}
              onChange={(e) => {
                if (
                  /\d/gi.test(e.target.value) == true ||
                  e.target.value == ""
                ) {
                  props.setcvc(e.target.value);
                }

                props.setcvcVal(true);
              }}
            />
            <p className="val">Can’t be blank</p>
          </div>
        </div>

        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setClickConfirm(true);
            if (props.name == "") {
              props.setNameVal(false);
            }
            if (props.cardNumber == "") {
              props.setNumberVal(false);
            }
            if (props.month == "") {
              props.setMonthVal(false);
            }
            if (props.year == "") {
              props.setYearVal(false);
            }
            if (props.cvc == "") {
              props.setcvcVal(false);
            }
            if (
              props.nameVal == true &&
              props.name != "" &&
              props.numberVal == true &&
              props.cardNumber != "" &&
              props.monthVal == true &&
              props.month != "" &&
              props.yearVal == true &&
              props.year != "" &&
              props.cvcVal == true &&
              props.cvc != "" &&
              props.isNumber == true &&
              numberLength == 19
            ) {
              props.setLetConfirm(true);
            }
          }}
        >
          Confirm
        </button>
      </form>
    </FormContainer>
  );
};

export default Form;
