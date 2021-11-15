import React, { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';
import './index.css';

const url = 'https://api.quotable.io/random';

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [random, setRandom] = useState(false);
  const btnColor = useRef(null);
  const aColor = useRef(null);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { content, author } = data;
    const newQuote = { content, author };
    setQuote(newQuote);
  };

  useEffect(() => {
    fetchData();
  }, [random]);

  const randomColor = () => {
    const colorList = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];
    const colorName = colorList[Math.floor(Math.random() * colorList.length)];
    document.body.style.backgroundColor = colorName;
    document.body.style.color = colorName;
    btnColor.current.style.backgroundColor = colorName;
    aColor.current.style.backgroundColor = colorName;
  };

  const { content, author } = quote;
  return (
    <div className="wrapper">
      <section id="quote-box">
        <div className="quote">
          <div className="quote-text">
            <FaQuoteLeft />
            <span id="text">{content}</span>
          </div>
          <div className="quote-author">
            <span id="author">-{author}</span>
          </div>
        </div>

        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${content} -${author}`}
            target="_blank"
            rel="noreferrer"
            id="tweet-quote"
            className="button"
            ref={aColor}
          >
            <FaTwitter />
          </a>
          <button
            className="button"
            id="new-quote"
            onClick={() => {
              setRandom(!random);
              randomColor();
            }}
            ref={btnColor}
          >
            New Quote
          </button>
        </div>
      </section>
      <div className="footer">
        by{' '}
        <a
          href="https://twitter.com/anujdube9/"
          rel="noreferrer"
          target="_blank"
        >
          anujsd
        </a>
      </div>
    </div>
  );
}

export default App;
