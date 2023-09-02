import React, { useEffect, useState } from "react";
import "./Main.scss";
import { cardData } from "../../data/Data";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  // https://api.shrtco.de/v2/shorten?url=


  // GET LOCAL STORAGE FUNCTION
  const getLocalStorage = ()=>{
    let links = localStorage.getItem('links')

    if(links){
      return JSON.parse(localStorage.getItem('links'))
    } else{
      return []
    }
  }

  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [showLink, setShowLink] = useState(false);
  const [apiData, setApiData] = useState(getLocalStorage())

  console.log(apiData)


  // HANDLE SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setError(true);
    } else {
      const getShortenedLink = async () => {
        const resp = await fetch(
          ` https://api.shrtco.de/v2/shorten?url=${text}`
        );
        const data = await resp.json();
          setApiData(data.result)
        setShowLink(true);
      };
      getShortenedLink();
    }
    setText("");
  };


  // HANDLE COPY FUNCTION
  const handleCopy = ()=>{
    navigator.clipboard.writeText(apiData.short_link)
    setCopied(true)
  }

  // SAVE TO LOCAL STORAGE

  useEffect(() =>{
    localStorage.setItem('links', JSON.stringify(apiData))
  }, [apiData])

  const handleInputChange = (e) =>{
    setText(e.target.value)
    setError(false)
  }

  return (
    <section className="main">
      <form className="searchBox" onSubmit={handleSubmit}>
        <input
          className={error ? "error" : ""}
          type="text"
          placeholder=" Shorten a link here..."
          value={text}
          onChange={handleInputChange}
        />
        <button className="primaryBtn"> Shorten It!</button>
        {error && <p className="errorText">Please add a link!</p>}
      </form>

      <div className="content">
        <ul className="outputWrapper">
          {showLink && (
            <li className="output">
              <div className="linkContainer">
                <p>{apiData.original_link}</p>
              </div>
              <div className="shortened">
                <p>{apiData.short_link}</p>

                {copied ? (
                  <button className="copied">Copied</button>
                ) : (
                  <button className="primaryBtn" onClick={handleCopy}>Copy</button>
                )}
              </div>
            </li>
          )}
        </ul>
        <div className="heading">
          <h2> Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="cardWrapper">
          <div className="hr"></div>
          <div className="vr"></div>
          {cardData.map((item) => (
            <div className={`card ${item.style}`} key={item.id}>
              <div className="imgWrapper">
                <img src={item.image} alt="cardImage" />
              </div>
              <h3> {item.title}</h3>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
