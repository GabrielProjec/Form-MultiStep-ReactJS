import "./Steps.css";

// ICONS
import { FiSend } from "react-icons/fi";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

function Steps({ currentStep }) {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>

      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>

      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
}

export default Steps;
