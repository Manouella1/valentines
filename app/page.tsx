"use client";

import React, { useState, useRef } from "react";

const messages: string[] = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

const ValentinePage: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [noButtonText, setNoButtonText] = useState<string>("No");
  const [showPage2, setShowPage2] = useState<boolean>(false);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoClick = () => {
    setNoButtonText(messages[messageIndex]);

    setMessageIndex((prev) => (prev + 1) % messages.length);

    if (yesButtonRef.current) {
      const currentSize = parseFloat(
        window.getComputedStyle(yesButtonRef.current).fontSize
      );
      yesButtonRef.current.style.fontSize = `${currentSize * 1.5}px`;
    }
  };

  const handleYesClick = () => {
    setShowPage2(true);
  };

  return (
    <>
      {!showPage2 ? (
        <div className="container" id="page1">
          <h1>Will you be my Valentine?</h1>
          <div className="buttons">
            <button
              ref={yesButtonRef}
              className="yes-button"
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button className="no-button" onClick={handleNoClick}>
              {noButtonText}
            </button>
          </div>
          <div className="gif_container">
            <img
              src="https://media1.giphy.com/media/VM1fcpu2bKs1e2Kdbj/giphy.gif"
              alt="Cute GIF"
            />
          </div>
        </div>
      ) : (
        <div className="container" id="page2">
          <h1 className="header_text">Knew you would say yes! 💖</h1>
          <div className="gif_container">
            <img
              src="https://media4.giphy.com/media/9XY4f3FgFTT4QlaYqa/giphy.gif"
              alt="Celebration GIF"
            />
          </div>
        </div>
      )}

      {/* Global CSS styles */}
      <style jsx global>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f9e3e3;
          font-family: "Arial", sans-serif;
        }

        .container {
          text-align: center;
        }

        .header_text {
          font-size: 3em;
          color: #d32f2f;
        }

        h1 {
          font-size: 2.5em;
          color: #d32f2f;
        }

        .gif_container img {
          width: 100%;
          max-width: 500px;
          height: auto;
        }

        .buttons {
          margin-top: 20px;
        }

        .yes-button {
          font-size: 1.5em;
          padding: 10px 20px;
          margin-right: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .no-button {
          font-size: 1.5em;
          padding: 10px 20px;
          background-color: #f44336;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .gif_container img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          margin-top: 20px;
        }

        .page-link {
          display: inline-block;
          padding: 10px 20px;
          background-color: #2196f3;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 20px;
        }

        .page-link:hover {
          background-color: #1976d2;
        }
      `}</style>
    </>
  );
};

export default ValentinePage;
