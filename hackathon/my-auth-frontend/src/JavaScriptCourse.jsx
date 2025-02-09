import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const JavaScriptCourse = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "Which keyword is used to declare a constant variable in JavaScript?",
      options: ["var", "let", "const", "static"],
      correct: 2,
    },
    {
      question: "What is the output of 'typeof null' in JavaScript?",
      options: ["object", "null", "undefined", "number"],
      correct: 0,
    },
    {
      question: "Which method is used to convert a JSON string into an object?",
      options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "stringifyJSON()"],
      correct: 1,
    },
    {
      question: "What will '2' + 2 evaluate to in JavaScript?",
      options: ["22", "4", "NaN", "Error"],
      correct: 0,
    },
    {
      question: "Which function is used to execute a function after a given time interval?",
      options: ["setTimeout()", "setInterval()", "clearTimeout()", "delay()"],
      correct: 0,
    },
  ];

  const handleAnswerSelect = (qIndex, optionIndex) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) newScore++;
    });
    setScore(newScore);
  };

  return (
    <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "20px" }}>
      <div className="container py-4" style={{ backgroundColor: "#e3f2fd" }}>
        <h1 className="text-center text-primary">JavaScript Course</h1>

        {/* YouTube Video */}
        <div className="text-center my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/lfmg-EJ8gm4?si=UV8xt1L3YnQD-VXx"
              title="JavaScript Tutorial"
              frameBorder="0"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center my-4">
          <h2 className="text-success">Resources</h2>
          <p>Read more about JavaScript from MDN Documentation.</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go to MDN Docs
          </a>
        </div>

        {/* Quiz Section */}
        <div className="my-4 p-4 bg-white shadow rounded">
          <h2 className="text-center text-info">Quiz</h2>
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="my-3">
              <h5>
                {qIndex + 1}. {q.question}
              </h5>
              {q.options.map((option, optionIndex) => (
                <div key={optionIndex} className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name={`question-${qIndex}`}
                    onChange={() => handleAnswerSelect(qIndex, optionIndex)}
                    checked={answers[qIndex] === optionIndex}
                  />
                  <label className="form-check-label mx-2">{option}</label>
                </div>
              ))}
            </div>
          ))}
          <button className="btn btn-success mt-3" onClick={calculateScore}>
            Submit Quiz
          </button>
          {score !== null && (
            <h4 className="mt-3 text-center">Your Score: {score}/5</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default JavaScriptCourse;
