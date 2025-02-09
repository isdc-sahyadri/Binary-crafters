import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CSScourse = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    1: "Cascading Style Sheets",
    2: "color",
    3: "margin",
    4: "position",
    5: "position",
  };

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    Object.keys(correctAnswers).forEach((q) => {
      if (answers[q] === correctAnswers[q]) newScore += 1;
    });
    setScore(newScore);
  };

  return (
    <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "20px" }}>
      <div className="container py-4" style={{ backgroundColor: "#e3f2fd" }}>
        <h1 className="text-center text-primary">CSS Course</h1>

        {/* YouTube Video */}
        <div className="text-center my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/wRNinF7YQqQ"
              title="CSS Tutorial"
              frameBorder="0"
              allowFullScreen
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center my-4">
          <h2 className="text-success">Resources</h2>
          <p>Read more about CSS from MDN Documentation.</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
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
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <h5>1. What does CSS stand for?</h5>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="1"
                  value="Cascading Style Sheets"
                  onChange={() => handleAnswer(1, "Cascading Style Sheets")}
                />
                <label className="form-check-label">Cascading Style Sheets</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="1"
                  value="Creative Style System"
                  onChange={() => handleAnswer(1, "Creative Style System")}
                />
                <label className="form-check-label">Creative Style System</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="1"
                  value="Computer Styling Software"
                  onChange={() => handleAnswer(1, "Computer Styling Software")}
                />
                <label className="form-check-label">Computer Styling Software</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="1"
                  value="Code Styling Syntax"
                  onChange={() => handleAnswer(1, "Code Styling Syntax")}
                />
                <label className="form-check-label">Code Styling Syntax</label>
              </div>
            </div>

            <div className="my-3">
              <h5>2. Which CSS property is used to change text color?</h5>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="2"
                  value="text-color"
                  onChange={() => handleAnswer(2, "text-color")}
                />
                <label className="form-check-label">text-color</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="2"
                  value="color"
                  onChange={() => handleAnswer(2, "color")}
                />
                <label className="form-check-label">color</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="2"
                  value="font-color"
                  onChange={() => handleAnswer(2, "font-color")}
                />
                <label className="form-check-label">font-color</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="2"
                  value="background-color"
                  onChange={() => handleAnswer(2, "background-color")}
                />
                <label className="form-check-label">background-color</label>
              </div>
            </div>

            <div className="my-3">
              <h5>3. What CSS property is used to add space outside an element?</h5>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="3"
                  value="padding"
                  onChange={() => handleAnswer(3, "padding")}
                />
                <label className="form-check-label">padding</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="3"
                  value="margin"
                  onChange={() => handleAnswer(3, "margin")}
                />
                <label className="form-check-label">margin</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="3"
                  value="spacing"
                  onChange={() => handleAnswer(3, "spacing")}
                />
                <label className="form-check-label">spacing</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="3"
                  value="border"
                  onChange={() => handleAnswer(3, "border")}
                />
                <label className="form-check-label">border</label>
              </div>
            </div>

            <div className="my-3">
              <h5>4. Which CSS property controls the position of an element?</h5>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="4"
                  value="display"
                  onChange={() => handleAnswer(4, "display")}
                />
                <label className="form-check-label">display</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="4"
                  value="float"
                  onChange={() => handleAnswer(4, "float")}
                />
                <label className="form-check-label">float</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="4"
                  value="position"
                  onChange={() => handleAnswer(4, "position")}
                />
                <label className="form-check-label">position</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="4"
                  value="relative"
                  onChange={() => handleAnswer(4, "relative")}
                />
                <label className="form-check-label">relative</label>
              </div>
            </div>

            <div className="my-3">
              <h5>5. Which CSS property sets the positioning method?</h5>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="5"
                  value="display"
                  onChange={() => handleAnswer(5, "display")}
                />
                <label className="form-check-label">display</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="5"
                  value="float"
                  onChange={() => handleAnswer(5, "float")}
                />
                <label className="form-check-label">float</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="5"
                  value="position"
                  onChange={() => handleAnswer(5, "position")}
                />
                <label className="form-check-label">position</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="5"
                  value="grid"
                  onChange={() => handleAnswer(5, "grid")}
                />
                <label className="form-check-label">grid</label>
              </div>
            </div>

            <button type="submit" className="btn btn-success mt-3">
              Submit Quiz
            </button>
          </form>

          {score !== null && (
            <h4 className="mt-3 text-center">Your Score: {score} / 5</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default CSScourse;