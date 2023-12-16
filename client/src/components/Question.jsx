import { useEffect, useState } from "react";
import "./question.css";
export default function Question({ title, answer, plus, minus }) {
  const [showAnswer, setShowAnswer] = useState("");
  useEffect(() => {
    if (showAnswer == "") {
      document
        .getElementById(`${plus}`)
        .setAttribute("style", "display: intial");
      document
        .getElementById(`${minus}`)
        .setAttribute("style", "display: none");
    } else if (showAnswer == "shown") {
      document
        .getElementById(`${minus}`)
        .setAttribute("style", "display: initial");
      document.getElementById(`${plus}`).setAttribute("style", "display: none");
    }
  }, [showAnswer]);
  return (
    <div className="question">
      <div>
        {" "}
        <h1>{title}</h1>
        <button
          type="button"
          onClick={() => {
            if (showAnswer == "") {
              setShowAnswer("shown");
            } else if (showAnswer == "shown") {
              setShowAnswer("");
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
            id={`${plus}`}
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
            id={`${minus}`}
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
      <div className={`answer ${showAnswer}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
