import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HtmlCourse = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyperlink and Text Management Language",
        "Home Tool Markup Language",
      ],
      correct: 0,
    },
    {
      question: "Which HTML tag is used to define a paragraph?",
      options: ["<div>", "<p>", "<span>", "<h1>"],
      correct: 1,
    },
    {
      question: "Which attribute specifies an image source in HTML?",
      options: ["href", "alt", "src", "link"],
      correct: 2,
    },
    {
      question: "Which tag is used for creating a hyperlink?",
      options: ["<link>", "<href>", "<a>", "<url>"],
      correct: 2,
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h6>", "<h3>", "<h1>", "<h5>"],
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
        <h1 className="text-center text-primary">HTML Course</h1>
        
        {/* YouTube Video */}
        <div className="text-center my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/HD13eq_Pmp8"
              title="HTML Tutorial"
              frameBorder="0"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
        
        {/* Resources */}
        <div className="text-center my-4">
          <h2 className="text-success">Resources</h2>
          <p>Read more about HTML from MDN Documentation.</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
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
              <h5>{qIndex + 1}. {q.question}</h5>
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
          {score !== null && <h4 className="mt-3 text-center">Your Score: {score}/5</h4>}
        </div>
      </div>
    </div>
  );
};

export default HtmlCourse;