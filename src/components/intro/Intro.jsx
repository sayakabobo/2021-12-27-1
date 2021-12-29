import "./intro.css";
import Me from "../../img/me.png";

function Intro() {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Sarah</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creater</div>
              </div>
            </div>
            <p className="i-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              error aliquam eligendi aut architecto, eum modi suscipit maxime
              nulla ducimus dolores tenetur nihil commodi dignissimos facilis
              tempore vitae voluptas fugiat?
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
}

export default Intro;
