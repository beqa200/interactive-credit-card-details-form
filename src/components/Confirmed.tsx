import ConfirmedContainer from "../styled-components/ConfirmedContainer.styled";
import { complete } from "../assets";
const Confirmed = (props: Props3) => {
  return (
    <ConfirmedContainer>
      <img src={complete} />
      <h2>THANK YOU!</h2>
      <p>We’ve added your card details</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.setLetConfirm(false);
          props.setName("");
          props.setCardNumber("");
          props.setMonth("");
          props.setYear("");
          props.setcvc("");
          props.setMonthVal(true);
          props.setNameVal(true);
          props.setNumberVal(true);
          props.setYearVal(true);
          props.setcvcVal(true);
        }}
      >
        Continue
      </button>
    </ConfirmedContainer>
  );
};

export default Confirmed;
