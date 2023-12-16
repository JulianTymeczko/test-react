import "./App.css";
import Question from "./components/Question";
import "./reset.css";
function App() {
  return (
    <div className="main">
      <h1>Questions</h1>
      <div className="questions">
        <Question
          title="awdwadwadwadwad"
          answer="lorem*dwadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dadsda ad asd as das sd as da ssd "
          plus="1"
          minus="2"
        ></Question>
        <Question
          title="awdwadwadwadwad"
          answer="lorem*dwadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dadsda ad asd as das sd as da ssd "
          plus="3"
          minus="4"
        ></Question>
        <Question
          title="awdwadwadwadwad"
          answer="lorem*dwadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dadsda ad asd as das sd as da ssd "
          plus="5"
          minus="6"
        ></Question>
        <Question
          title="Stan"
          answer="lorem*dwadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dadsda ad asd as das sd as da ssd "
          plus="7"
          minus="8"
        ></Question>
      </div>
    </div>
  );
}

export default App;
