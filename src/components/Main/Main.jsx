import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  return (
    <div className="main">
      <div className="nav">
        <a href="https://neuratialabs.com/" target="_blank"><img src={assets.logo} alt="" className="logo" /></a>
        <img src={assets.user_icon} alt="User" className="user" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Affaan</span>
              </p>
              <p>How Can I Help You today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest Some Place To Visit in Dubai")
                }
              >
                <p>Suggest Some Place To Visit in Dubai </p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "What is ReactJs?"
                  )
                }
              >
                <p>What is ReactJs? </p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("What does Neuratia Labs do?")
                }
              >
                <p>What does Neuratia Labs do?</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "What is CNN?"
                  );
                }}
              >
                <p>What is CNN?</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User" className="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Result" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">

            {/* <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSent();

                }


              }}

              value={input}
              type="text"
              placeholder="Enter a Prompt Here"
            /> */}

            <textarea
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSent();
                }
              }}
              value={input}
              placeholder="Enter a Prompt Here"
              rows={5}  // Adjust rows as needed to control the height
              style={{ width: "100%", resize: "vertical" }}  // Optional styles for resizing
            />


            <div>
              <img className="btn" src={assets.gallery_icon} alt="Image" />
              <img className="btn" src={assets.mic_icon} alt="Mic" />
              <img
                src={assets.send_icon}
                alt="Send"
                onClick={() => {
                  onSent();
                }} className="btn"
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Neuratia Chatbot may display inaccurate info.
            </p>
            {/* <p>Made by Affaan Shaikh || Founder, CEO at <a className="link" href="https://neuratialabs.com/" target="_blank">Neuratia Labs</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
