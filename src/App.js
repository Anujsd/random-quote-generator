import React, { useState, useEffect } from 'react';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';
import './index.css';

const url = 'https://api.quotable.io/random';

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [random, setRandom] = useState(false);

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
            id="tweet-quote"
            className="button"
          >
            <FaTwitter />
          </a>
          <button
            className="button"
            id="new-quote"
            onClick={() => {
              setRandom(!random);
            }}
          >
            New Quote
          </button>
        </div>
      </section>
      <div class="footer">
        by{' '}
        <a href="https://twitter.com/anujdube9/" target="_blank">
          anujsd
        </a>
      </div>
    </div>
  );
}

export default App;
