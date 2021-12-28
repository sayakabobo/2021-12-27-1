import "./about.css";
import AboutImage from "../../img/images2.jpg";
import Award from "../../img/images1.jpg";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutImage} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          doloremque, dolores cum at praesentium iste porro quam amet modi quo,
          nostrum nemo molestias fugiat vero debitis totam aspernatur.
          Consequatur, possimus.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          eaque, ratione aliquid debitis laudantium ipsa quod maxime vitae
          tempora repellendus veritatis nesciunt asperiores excepturi,
          doloribus, ut dignissimos exercitationem facere voluptatum.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Internatinal Design Award 2021</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              possimus cupiditate, blanditiis obcaecati totam cumque quod
              corporis facilis laborum voluptate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
