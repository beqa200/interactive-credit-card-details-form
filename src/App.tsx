import React from "react";
import { Body } from "./styled-components";
import { Form, Card, Confirmed } from "./components";
import { useState } from "react";
function App() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [cvc, setcvc] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [letConfirm, setLetConfirm] = useState<boolean>(false);

  const [isNumber, setIsNumber] = useState<boolean>(true);
  const [nameVal, setNameVal] = useState<boolean>(true);
  const [monthVal, setMonthVal] = useState<boolean>(true);
  const [yearVal, setYearVal] = useState<boolean>(true);
  const [cvcVal, setcvcVal] = useState<boolean>(true);
  const [numberVal, setNumberVal] = useState<boolean>(true);
  return (
    <Body>
      <Card
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setcvc={setcvc}
        name={name}
        setName={setName}
      />

      {letConfirm == false ? (
        <Form
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setcvc={setcvc}
          name={name}
          setName={setName}
          setLetConfirm={setLetConfirm}
          setIsNumber={setIsNumber}
          setMonthVal={setMonthVal}
          setNumberVal={setNumberVal}
          setNameVal={setNameVal}
          setYearVal={setYearVal}
          setcvcVal={setcvcVal}
          monthVal={monthVal}
          yearVal={yearVal}
          numberVal={numberVal}
          nameVal={nameVal}
          cvcVal={cvcVal}
          isNumber={isNumber}
        />
      ) : (
        <Confirmed
          setName={setName}
          setCardNumber={setCardNumber}
          setMonth={setMonth}
          setYear={setYear}
          setcvc={setcvc}
          setLetConfirm={setLetConfirm}
          setMonthVal={setMonthVal}
          setNameVal={setNameVal}
          setNumberVal={setNameVal}
          setYearVal={setYearVal}
          setcvcVal={setcvcVal}
        />
      )}
    </Body>
  );
}

export default App;
