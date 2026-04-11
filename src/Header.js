import "./header.css";

function app() {
  return (
    <div className="head-container">
      <div className="slider">
        <div className="screen1">
          <div id="pic-holder">
            <div id="pic"></div>
          </div>
          <div id="discription">
            <h1>Hey,</h1>
            <h4>
            I'm Tejash Kumar, here i post things that i <span className="heighlight">build</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default app;
