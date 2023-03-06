import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");

  const apiQuote = async () => {
    let randomQuotes = [];
    try {
      const message = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      randomQuotes = message.data;
      //console.log(randomQuotes);
    } catch (error) {
      console.log(error);
    }
    try {
      setQuote(randomQuotes[0]);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      apiQuote();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>{quote}</p>
    </div>
  );
};

export default App;
