import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReactCourse = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "What is React primarily used for?",
      options: [
        "Server-side rendering",
        "Building user interfaces",
        "Managing databases",
        "Creating backend APIs",
      ],
      correct: 1,
    },
    {
      question: "Which hook is used to manage state in functional components?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      correct: 1,
    },
    {
      question: "What is JSX in React?",
      options: [
        "A new programming language",
        "A syntax extension for JavaScript",
        "A built-in React component",
        "A React framework",
      ],
      correct: 1,
    },
    {
      question: "How do you pass data from a parent to a child component in React?",
      options: ["Using props", "Using state", "Using Redux", "Using context"],
      correct: 0,
    },
    {
      question: "Which method is used to fetch data in React?",
      options: ["fetch()", "useFetch()", "useEffect()", "getData()"],
      correct: 2,
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
        <h1 className="text-center text-primary">React Course</h1>

        {/* YouTube Video */}
        <div className="text-center my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/CgkZ7MvWUAA"
              title="React Tutorial"
              frameBorder="0"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center my-4">
          <h2 className="text-success">Resources</h2>
          <p>Read more about React from the official documentation.</p>
          <a
            href="https://legacy.reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go to React Docs
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

export default ReactCourse;
