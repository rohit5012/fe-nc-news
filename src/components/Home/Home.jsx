import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../../assets/images/pic1.jpeg";
import Pic2 from "../../assets/images/pic2.jpeg";
import Pic3 from "../../assets/images/pic3.jpeg";
import "../Home/Home.css";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={Pic1} className="carousel_pics" />
          <Carousel.Caption>
            <h4>The battle for Node.js security has only begun</h4>
            <p>
              The founder of the Node Security Project says Node.js still has
              common vulnerabilities, but progress has been made to make it more
              secure. Appearing at the recent Node Community Convention in San
              Francisco, project founder Adam Baldwin, chief security officer at
              Web consulting company &yet, emphasized risks, protections, and
              progress.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Pic2} className="carousel_pics" />
          <Carousel.Caption>
            <h4>Running a Node App</h4>
            <p>
              This is part two of a series on how to get up and running with
              Systemd and Node.js. This part dives deeper into how to
              successfully run your app with systemd long-term, and how to set
              it up in a production environment.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Pic3} className="carousel_pics" />
          <Carousel.Caption>
            <h4>
              The People Tracking Every Touch, Pass And Tackle in the World Cup
            </h4>
            <p>
              With each click and drag of a mouse, young soccer fanatics are
              creating the building blocks of the advanced stats that are
              changing how the sport is played, watched and analyzed. Opta and
              Prozone are among the companies that have taken soccer stats far
              beyond goals and saves, into the realm of pass completion
              percentage, defensive touches, percentage of aerial balls won,
              tackle percentage and goals scored above expectation. Cameras
              alone cant process all these stats.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div
        style={{
          border: "1px solid black",
          margin: "20px 50px 0px 50px",
        }}
      ></div>
      <br></br>
      <h3>Recent Articles</h3>
      <section></section>
    </>
  );
}

export default Home;
