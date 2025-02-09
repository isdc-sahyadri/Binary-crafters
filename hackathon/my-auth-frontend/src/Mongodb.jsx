import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MongoDBCourse = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "What is MongoDB?",
      options: [
        "A NoSQL database",
        "A relational database",
        "A programming language",
        "An operating system",
      ],
      correct: 0,
    },
    {
      question: "Which command is used to show all databases in MongoDB?",
      options: ["show dbs", "list databases", "display dbs", "get databases"],
      correct: 0,
    },
    {
      question: "Which format does MongoDB store data in?",
      options: ["XML", "JSON", "BSON", "CSV"],
      correct: 2,
    },
    {
      question: "What is the default port for MongoDB?",
      options: ["27017", "8080", "3306", "5432"],
      correct: 0,
    },
    {
      question: "Which of the following is a primary feature of MongoDB?",
      options: [
        "Strict table structure",
        "Document-based storage",
        "Stored procedures",
        "Foreign keys",
      ],
      correct: 1,
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
        <h1 className="text-center text-primary">MongoDB Course</h1>

        {/* YouTube Video */}
        <div className="text-center my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/c2M-rlkkT5o"
              title="MongoDB Tutorial"
              frameBorder="0"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center my-4">
          <h2 className="text-success">Resources</h2>
          <p>Read more about MongoDB from the official documentation.</p>
          <a
            href="https://www.mongodb.com/docs/manual/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go to MongoDB Docs
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
          {score !== null && <h4 className="mt-3 text-center">Your Score: {score}/5</h4>}
        </div>
      </div>
    </div>
  );
};

export default MongoDBCourse;
