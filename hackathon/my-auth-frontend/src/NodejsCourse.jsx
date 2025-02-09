import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NodejsCourse = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "What is Node.js?",
      options: [
        "A JavaScript runtime built on Chrome's V8 engine",
        "A Python framework",
        "A JavaScript library for UI development",
        "A relational database management system",
      ],
      correct: 0,
    },
    {
      question: "Which module is used to handle file system operations in Node.js?",
      options: ["http", "fs", "path", "os"],
      correct: 1,
    },
    {
      question: "Which of the following is used to import a module in Node.js?",
      options: ["import", "include", "require", "fetch"],
      correct: 2,
    },
    {
      question: "What does npm stand for?",
      options: [
        "Node Package Manager",
        "Network Protocol Module",
        "Node Programming Method",
        "New Project Manager",
      ],
      correct: 0,
    },
    {
      question: "Which global object in Node.js is used to handle asynchronous operations?",
      options: ["setTimeout", "process", "Promise", "Buffer"],
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
      <div className="container py-4">
        <h1 className="text-center text-primary">Node.js Course</h1>

        {/* YouTube Video */}
        <div className="text-center my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/Oe421EPjeBE"
              title="Node.js Tutorial"
              frameBorder="0"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center my-4">
          <h2 className="text-success">Resources</h2>
          <p>Read more about Node.js from the official documentation.</p>
          <a
            href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go to Node.js Docs
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

export default NodejsCourse;