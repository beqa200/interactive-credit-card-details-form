import { CardContainer } from "../styled-components";
import { cardBack, cardFront, logo } from "../assets";
const Card = (props: Props) => {
  return (
    <CardContainer>
      <div className="back">
        <img src={cardBack} className="card" />
        <p className="cvc">{props.cvc == "" ? "000" : props.cvc}</p>
      </div>
      <div className="front">
        <img src={cardFront} className="card" />
        <img src={logo} className="logo" />
        <p className="number">
          {props.cardNumber == "" || /[a-z]/gi.test(props.cardNumber) == true
            ? "0000 0000 0000 0000"
            : props.cardNumber}
        </p>
        <p className="name">
          {props.name == "" ? "JANE APPLESEED" : props.name}
        </p>
        <div className="date">
          <p>{props.month == "" ? "00/" : props.month + "/"}</p>
          <p className="p2">{props.year == "" ? "00" : props.year}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
